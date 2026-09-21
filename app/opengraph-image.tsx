import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = site.title;
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
          justifyContent: "center",
          padding: 80,
          background: "radial-gradient(ellipse 70% 80% at 85% 40%, rgba(59,130,246,0.35), #080d19 70%)",
          color: "#e8edf8",
        }}
      >
        <div style={{ fontSize: 30, color: "#60a5fa" }}>{site.name}</div>
        <div style={{ marginTop: 24, fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
          Software Developer
        </div>
        <div style={{ marginTop: 24, fontSize: 32, color: "#98a6c3" }}>
          Web · Mobile · AI · Automation · Cloud
        </div>
      </div>
    ),
    size,
  );
}
