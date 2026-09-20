import { ImageResponse } from "next/og";
export const alt = "Joshua Van — The Fearless";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", position: "relative", alignItems: "center", justifyContent: "center", background: "#080808", color: "white", fontFamily: "Arial, sans-serif", overflow: "hidden" }}>
    <div style={{ position: "absolute", width: 520, height: 520, border: "1px solid #2b2b2b", borderRadius: "50%" }} />
    <div style={{ position: "absolute", width: 300, height: 300, border: "1px solid #48201d", borderRadius: "50%" }} />
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: .82, fontSize: 150, fontWeight: 900, letterSpacing: -10, textTransform: "uppercase" }}><span>Joshua</span><span style={{ color: "#ff3b30" }}>Van</span></div>
    <div style={{ position: "absolute", left: 52, bottom: 42, fontSize: 18, letterSpacing: 5, textTransform: "uppercase", color: "#aaa" }}>The Fearless</div>
    <div style={{ position: "absolute", right: 52, bottom: 42, fontSize: 18, letterSpacing: 4, textTransform: "uppercase", color: "#aaa" }}>Myanmar → World</div>
  </div>, size);
}
