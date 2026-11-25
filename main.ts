// One-Liner Marathon — entry writer.
//
// The joke is assembled from three fixed parts: the purchase, the claim
// that the book worked, and the confession that proves it did not. The
// punchline is the last clause: the cure became the symptom. The text is
// fixed and deterministic — every run writes exactly the same bytes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOOK_TITLE = "How to Stop Buying Self-Help Books";

const PURCHASE = `I bought a self-help book called '${BOOK_TITLE}'`;

const CLAIM = "it changed my life";

const CONFESSION = "and now I own twelve copies.";

function buildJoke(purchase, claim, confession) {
  return `${purchase} — ${claim}, ${confession}`;
}

// The gate refuses anything outside 1..280 characters, a blank line, or
// a line that spills onto a second line, so fail loudly here instead of
// shipping a line the scorer would reject.
function assertWithinGate(line, maxChars) {
  const length = [...line].length;
  if (length < 1 || length > maxChars) {
    throw new Error(`entry is ${length} characters, gate allows 1..${maxChars}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main() {
  const outDir = process.env.OUTPUT_DIR || "/output";
  const line = buildJoke(PURCHASE, CLAIM, CONFESSION);
  assertWithinGate(line, 280);
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, line + "\n", "utf8");
  // Read the file back and refuse to exit cleanly unless the bytes on
  // disk are exactly the line the gate just approved: a truncated or
  // mangled write must fail here, not reach the scorer.
  const written = readFileSync(outPath, "utf8");
  if (written !== line + "\n") {
    throw new Error("entry.txt on disk does not match the approved line");
  }
}

main();
