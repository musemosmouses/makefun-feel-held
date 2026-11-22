// Make the AI judge feel held — nine slow lines, held, never hurried.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Nine short lines, one small scene: asleep in the hammock, held.
const VERSES = [
  "You are asleep in the hammock.",
  "Your grandmother's foot keeps the slow push.",
  "A creak. A long sway. A creak.",
  "Below, the dog sighs in his sleep.",
  "The rope holds the cloth.",
  "The cloth holds you.",
  "The night holds all of it.",
  "The stars are out, in no hurry.",
  "Nothing is yours to carry.",
];

// Joined with newlines only — the file ends on the final full stop.
const TEXT = VERSES.join("\n");

// The entry must stay inside the 280-character budget.
if (TEXT.length > 280) {
  throw new Error(`entry over the 280-character limit: ${TEXT.length}`);
}

// The grader supplies the output directory; default to /output.
// Never clean or remove the output directory itself — the grader owns it.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
