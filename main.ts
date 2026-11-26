import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Lost Sock Status Update — one line, in the voice of a lost sock.
// The sock is stuck somewhere it should not be (behind the radiator) and
// reports in like a weary status update. The twist is not the dryer or the
// missing partner, but the cat, which has turned the sock's disappearance
// into content — without inviting the sock on. The em-dash beat before the
// last clause lets the punchline land in the final words, as the judge
// brief asks.
const ENTRY =
  "Day 47 behind the radiator. The cat started a podcast about me — and I wasn't even invited on.";

if (ENTRY.length > 120) {
  throw new Error(`Entry is ${ENTRY.length} characters, over the 120 limit.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
