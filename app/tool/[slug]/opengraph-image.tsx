import { ImageResponse } from "next/og";
import { toolDetails } from "@/app/lib/data";

export const runtime = "edge";

export const alt = "VersionHub Tool Details";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const tool = toolDetails[slug] || {
    name: "VersionHub",
    version: "Latest",
    desc: "Software Version Tracker",
  };

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B0C10",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background Gradient Blob */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            left: "-200px",
            width: "600px",
            height: "600px",
            background: "rgba(99, 102, 241, 0.2)",
            filter: "blur(100px)",
            borderRadius: "50%",
          }}
        />

        {/* Logo/Icon Area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            background: "linear-gradient(135deg, #6366F1, #A855F7)",
            borderRadius: "16px",
            marginBottom: "40px",
            color: "white",
            fontSize: "40px",
            fontWeight: "bold",
            boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)",
          }}
        >
          {tool.name.charAt(0)}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "70px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "20px",
            letterSpacing: "-2px",
          }}
        >
          {tool.name}
        </div>

        {/* Version Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#151920",
            border: "2px solid #272B36",
            borderRadius: "12px",
            padding: "10px 30px",
          }}
        >
          <span
            style={{ color: "#94A3B8", fontSize: "30px", marginRight: "15px" }}
          >
            Latest:
          </span>
          <span
            style={{
              color: "#6366F1",
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            {tool.version}
          </span>
        </div>

        {/* Footer Brand */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            color: "#475569",
            fontSize: "20px",
          }}
        >
          versionhub.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
