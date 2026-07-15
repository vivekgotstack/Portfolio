import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 18,
          background: "#c7ff38",
          color: "#080a08",
          fontSize: 20,
          fontWeight: 900,
          letterSpacing: -3,
          fontFamily: "monospace",
        }}
      >
        V/N
      </div>
    ),
    size,
  );
}
