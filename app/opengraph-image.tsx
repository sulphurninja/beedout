import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "BEEDOUT — All of Beed. One app.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const mark = await readFile(
    join(process.cwd(), "public/brand/beedout-mark.png"),
  );
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #241d15 0%, #120e0a 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#fbf8f1",
            fontSize: 28,
            letterSpacing: 6,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 99,
              background: "#ff4d00",
            }}
          />
          BEED, MAHARASHTRA — 18.99° N / 75.76° E
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} alt="" width={251} height={180} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 132,
                fontWeight: 900,
                color: "#fbf8f1",
                letterSpacing: -5,
                display: "flex",
              }}
            >
              BEEDOUT<span style={{ color: "#ff4d00" }}>.</span>
            </div>
            <div
              style={{
                fontSize: 42,
                color: "#f6bb22",
                marginTop: 8,
                display: "flex",
              }}
            >
              All of Beed. One app.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(251, 248, 241, 0.55)",
            fontSize: 26,
          }}
        >
          <div style={{ display: "flex" }}>
            Clubs · Businesses · Bootcamps · Community
          </div>
          <div style={{ display: "flex", color: "#fbf8f1" }}>beedout.com</div>
        </div>
      </div>
    ),
    size,
  );
}
