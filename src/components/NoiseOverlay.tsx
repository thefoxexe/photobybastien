import { useId } from "react";

export default function NoiseOverlay({ opacity }: { opacity: number }) {
  const id = `grain-${useId()}`;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
      <svg className="absolute inset-0 h-full w-full" style={{ opacity }}>
        <filter id={id}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${id})`} />
      </svg>
    </div>
  );
}
