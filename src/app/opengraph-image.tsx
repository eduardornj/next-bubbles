import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Bubbles Enterprise — Soffit & Fascia Specialists in Orlando, FL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
          position: "relative",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: 100,
            left: 150,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 160,
            right: 120,
            width: 50,
            height: 50,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 120,
            left: 100,
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 100,
            right: 80,
            width: 70,
            height: 70,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "white",
              letterSpacing: "-1px",
              display: "flex",
            }}
          >
            Bubbles
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#60a5fa",
              marginTop: 8,
              display: "flex",
            }}
          >
            Enterprise
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "#93c5fd",
              marginTop: 16,
              display: "flex",
            }}
          >
            Soffit & Fascia Specialists
          </div>
          <div
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.85)",
              marginTop: 12,
              display: "flex",
            }}
          >
            Professional Construction Services in Orlando, FL
          </div>

          {/* Trust badges */}
          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 40,
            }}
          >
            {["Licensed & Insured", "Premium Materials", "(407) 715-1790"].map(
              (text) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(255,255,255,0.12)",
                    borderRadius: 30,
                    padding: "8px 20px",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#4ade80",
                      display: "flex",
                    }}
                  />
                  <span
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.9)",
                      fontWeight: 600,
                      display: "flex",
                    }}
                  >
                    {text}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
