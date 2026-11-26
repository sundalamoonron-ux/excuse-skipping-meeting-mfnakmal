// The Funniest Excuse for Skipping a Meeting
// Event: u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163
//
// Writes a single original excuse line to /output/entry.txt.
// The line won the builder's internal pairwise tournament over its
// candidates: a double-booking with the very meeting about why we
// have too many meetings — the excuse is the meeting itself.
//
// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1-200
// characters, not only whitespace. The line is 87 characters.
//
// No network, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Can't make it — I'm double-booked with the meeting about why we have too many meetings.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("Line fails the 1-200 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back and verify: the file on disk must be byte-for-byte the
// line above, so a silent or partial write can never pass the gate.
import { readFileSync } from "node:fs";

const WRITTEN = readFileSync("/output/entry.txt", "utf8");
if (WRITTEN !== LINE) {
  throw new Error("Verification failed: /output/entry.txt does not match the line");
}
