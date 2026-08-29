import { PNG } from "pngjs";
import { writeFileSync } from "node:fs";

const BG = [10, 10, 13]; // ink-950
const FG = [245, 165, 36]; // amber-400

function makeIcon(size) {
  const png = new PNG({ width: size, height: size });
  const cx = size / 2;
  const cy = size / 2;
  const ringR = size * 0.36; // lens body, within maskable safe zone (~40% radius)
  const ringInnerR = size * 0.29;
  const apertureR = size * 0.13;
  const bladeCount = 6;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (size * y + x) << 2;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);

      let color = BG;

      // Outer lens ring
      if (dist <= ringR && dist >= ringInnerR) {
        color = FG;
      } else if (dist < ringInnerR) {
        // Iris blades: alternate dark/amber wedges rotating inward to a center aperture hole
        if (dist <= apertureR) {
          color = BG;
        } else {
          const segment = Math.floor(((angle + Math.PI) / (2 * Math.PI)) * bladeCount);
          color = segment % 2 === 0 ? FG : [30, 22, 8];
        }
      }

      png.data[idx] = color[0];
      png.data[idx + 1] = color[1];
      png.data[idx + 2] = color[2];
      png.data[idx + 3] = 255;
    }
  }

  return PNG.sync.write(png);
}

writeFileSync("public/icon-192.png", makeIcon(192));
writeFileSync("public/icon-512.png", makeIcon(512));
console.log("Icons generated.");
