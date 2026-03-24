import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool } from "@neondatabase/serverless";

const connectionString = process.env.POSTGRES_PRISMA_URL ?? process.env.DATABASE_URL ?? "";
const pool = new Pool({ connectionString });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const adapter = new PrismaNeon(pool as any);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  // ============================================================
  // PRICING RULES (upsert by key — idempotent)
  // ============================================================

  const pricingRules = [
    { key: "labor_new_construction", label: "Labor - New Construction", value: 4.0, unit: "$/LF" },
    { key: "labor_rr_1story", label: "Labor - R&R 1 Story", value: 6.0, unit: "$/LF" },
    { key: "labor_rr_2story", label: "Labor - R&R 2 Story", value: 7.0, unit: "$/LF" },
    { key: "oh_rate_12", label: "OH Rate ≤12\"", value: 4.0, unit: "$/LF" },
    { key: "oh_rate_24", label: "OH Rate 13-24\"", value: 5.0, unit: "$/LF" },
    { key: "oh_rate_36", label: "OH Rate 25-36\"", value: 7.0, unit: "$/LF" },
    { key: "oh_rate_12_vinyl", label: "OH Rate ≤12\" (Vinyl)", value: 3.5, unit: "$/LF" },
    { key: "oh_rate_24_vinyl", label: "OH Rate 13-24\" (Vinyl)", value: 4.5, unit: "$/LF" },
    { key: "oh_rate_36_vinyl", label: "OH Rate 25-36\" (Vinyl)", value: 6.5, unit: "$/LF" },
    { key: "waste_percent", label: "Waste %", value: 5.0, unit: "%" },
    { key: "abc_tax_percent", label: "ABC Supply Tax", value: 6.0, unit: "%" },
    { key: "helper_day_rate", label: "Helper Day Rate", value: 150.0, unit: "$/day" },
    { key: "deposit_pct_small", label: "Deposit % (≤$2,500)", value: 20.0, unit: "%" },
    { key: "deposit_fixed_mid", label: "Deposit Fixed ($2,501-$4,000)", value: 500.0, unit: "$" },
    { key: "deposit_pct_large", label: "Deposit % (>$4,000)", value: 30.0, unit: "%" },
  ];

  for (const rule of pricingRules) {
    await prisma.pricingRule.upsert({
      where: { key: rule.key },
      update: { label: rule.label, value: rule.value, unit: rule.unit },
      create: { key: rule.key, label: rule.label, value: rule.value, unit: rule.unit },
    });
  }

  console.log(`  ${pricingRules.length} pricing rules upserted`);

  // ============================================================
  // MATERIAL COSTS (create — deleteMany first for idempotency)
  // ============================================================

  await prisma.materialCost.deleteMany();

  const materialCosts = [
    { materialType: "SOFFIT_PANEL" as const, description: "Soffit Alum White 16\"", supplier: "ABC Supply", unitPrice: 19.5, unit: "PNL" },
    { materialType: "SOFFIT_PANEL" as const, description: "Soffit Alum Black 16\"", supplier: "ABC Supply", unitPrice: 20.0, unit: "PNL" },
    { materialType: "SOFFIT_PANEL" as const, description: "Soffit Vinyl White 12\"", supplier: "ABC Supply", unitPrice: 10.0, unit: "PNL" },
    { materialType: "FASCIA_BOARD" as const, description: "Fascia Alum White 4\"", supplier: "ABC Supply", unitPrice: 9.0, unit: "PC" },
    { materialType: "FASCIA_BOARD" as const, description: "Fascia Alum White 6\"", supplier: "ABC Supply", unitPrice: 12.0, unit: "PC" },
    { materialType: "FASCIA_BOARD" as const, description: "Fascia Alum White 8\"", supplier: "ABC Supply", unitPrice: 20.0, unit: "PC" },
    { materialType: "FASCIA_BOARD" as const, description: "Fascia Alum Black 6\"", supplier: "ABC Supply", unitPrice: 13.5, unit: "PC" },
    { materialType: "J_CHANNEL" as const, description: "J-Channel Alum 3/8\" White", supplier: "ABC Supply", unitPrice: 5.5, unit: "PC" },
    { materialType: "F_CHANNEL" as const, description: "F-Channel Alum White", supplier: "ABC Supply", unitPrice: 5.7, unit: "PC" },
    { materialType: "NAILS_SCREWS" as const, description: "Nails (per job)", supplier: "Generic", unitPrice: 12.99, unit: "JOB" },
    { materialType: "CAULK" as const, description: "Caulk (per job)", supplier: "Generic", unitPrice: 8.0, unit: "JOB" },
  ];

  await prisma.materialCost.createMany({ data: materialCosts });

  console.log(`  ${materialCosts.length} material costs created`);

  // ============================================================
  // REFERRAL SOURCE
  // ============================================================

  await prisma.referralSource.upsert({
    where: { id: "invictus-roofing" },
    update: { name: "Invictus Roofing", type: "CONTRACTOR", isActive: true },
    create: { id: "invictus-roofing", name: "Invictus Roofing", type: "CONTRACTOR", isActive: true },
  });

  console.log("  1 referral source upserted");

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
