/**
 * convert-images.mjs
 * Converte JPEG/PNG para WebP usando sharp (já instalado no projeto)
 * Uso: node scripts/convert-images.mjs
 */

import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "..", "public", "images");

const QUALITY = 82; // 82 = ótimo equilíbrio qualidade/tamanho para fotos de trabalho
const SKIP_EXTENSIONS = new Set([".webp", ".avif", ".svg", ".gif"]);

async function getFiles(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
        const full = join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...(await getFiles(full)));
        } else {
            files.push(full);
        }
    }
    return files;
}

function formatKB(bytes) {
    return `${Math.round(bytes / 1024)}KB`;
}

async function convert() {
    const files = await getFiles(PUBLIC_DIR);
    const targets = files.filter(f => {
        const ext = extname(f).toLowerCase();
        return [".jpg", ".jpeg", ".png"].includes(ext);
    });

    console.log(`\n🔄 Convertendo ${targets.length} imagens para WebP...\n`);

    let totalBefore = 0;
    let totalAfter = 0;
    let converted = 0;
    let skipped = 0;

    for (const src of targets) {
        const ext = extname(src);
        const dest = src.replace(/\.(jpg|jpeg|png)$/i, ".webp");

        const srcStat = await stat(src);
        totalBefore += srcStat.size;

        try {
            const isPhoto = [".jpg", ".jpeg"].includes(ext.toLowerCase());
            const instance = sharp(src);

            if (isPhoto) {
                await instance
                    .webp({ quality: QUALITY, effort: 6 })
                    .toFile(dest);
            } else {
                // PNG — pode ser screenshot ou diagrama, usar lossless se pequeno
                await instance
                    .webp({ quality: QUALITY, lossless: srcStat.size < 100_000 })
                    .toFile(dest);
            }

            const destStat = await stat(dest);
            totalAfter += destStat.size;
            const saving = Math.round((1 - destStat.size / srcStat.size) * 100);
            const name = src.replace(PUBLIC_DIR, "").replace(/\\/g, "/");
            console.log(`  ✅ ${name}`);
            console.log(`     ${formatKB(srcStat.size)} → ${formatKB(destStat.size)} (${saving}% menor)`);
            converted++;
        } catch (err) {
            console.log(`  ❌ ERRO: ${basename(src)} — ${err.message}`);
            skipped++;
        }
    }

    const totalSaving = Math.round((1 - totalAfter / totalBefore) * 100);
    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`✅ Convertidas: ${converted} | ❌ Erros: ${skipped}`);
    console.log(`📦 Total antes: ${formatKB(totalBefore)}`);
    console.log(`📦 Total depois: ${formatKB(totalAfter)}`);
    console.log(`🚀 Economia total: ${totalSaving}% menor`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
    console.log(`PRÓXIMO PASSO: atualizar referências .jpg/.png → .webp nos componentes`);
    console.log(`Os originais foram mantidos — delete manualmente após verificar.\n`);
}

convert().catch(console.error);
