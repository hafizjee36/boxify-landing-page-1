import { useEffect, useState } from "react";

interface Box3DViewerProps {
  src: string;
  alt?: string;
  className?: string;
  poster?: string;
  autoRotate?: boolean;
}

export function Box3DViewer({ src, alt = "3D box model", className, poster, autoRotate = true }: Box3DViewerProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    import("@google/model-viewer").then(() => {
      if (mounted) setReady(true);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!ready) {
    return (
      <div className={`flex items-center justify-center bg-muted ${className ?? ""}`}>
        <div className="text-xs text-muted-foreground">Loading 3D…</div>
      </div>
    );
  }

  // @ts-expect-error - model-viewer is a custom element
  return (
    <model-viewer
      src={src}
      alt={alt}
      poster={poster}
      camera-controls
      touch-action="pan-y"
      auto-rotate={autoRotate ? "" : undefined}
      auto-rotate-delay="0"
      rotation-per-second="20deg"
      interaction-prompt="none"
      shadow-intensity="1"
      exposure="1"
      environment-image="neutral"
      style={{ width: "100%", height: "100%", background: "transparent" }}
    />
  );
}
