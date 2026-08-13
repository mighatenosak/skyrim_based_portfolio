import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "linear-gradient(160deg, #0c1114 0%, #090c0e 55%, #060809 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 90,
            top: "50%",
            transform: "translateY(-50%)",
            width: 300,
            height: 300,
            borderRadius: "50%",
            border: "1px solid rgba(185,204,210,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 220,
              height: 220,
              borderRadius: "50%",
              border: "1px solid rgba(185,204,210,0.35)",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: 100,
            paddingRight: 420,
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: 20,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#6f8288",
              marginBottom: 18,
              display: "flex",
            }}
          >
            A Portfolio, Of Sorts
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#e7eff1",
              letterSpacing: 2,
              display: "flex",
            }}
          >
            Salman Ali Khan
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#b9ccd2",
              marginTop: 20,
              display: "flex",
            }}
          >
            AI/ML Engineer + Odoo 19 Developer
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#6f8288",
              marginTop: 12,
              display: "flex",
            }}
          >
            BCA Honours Graduate · 2022–2026
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
