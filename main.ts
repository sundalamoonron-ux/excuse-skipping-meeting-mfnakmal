// The Funniest Excuse for Skipping a Meeting
// Event: u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163
//
// Writes one original excuse line to /output/entry.txt.
// Gate (RULES.txt): UTF-8 text, 1-200 characters, not only whitespace.
// The line is 94 characters / 96 bytes: the calendar declines the
// meeting for you, because even it knows it could have been an email.
// New line for the R2 resubmit — different from the R1 line about
// being double-booked with the meeting about too many meetings.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry — my calendar auto-declined on my behalf. Even it knows this one could've been an email.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("Line fails the 1-200 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

const WRITTEN = readFileSync("/output/entry.txt", "utf8");
if (WRITTEN !== LINE) {
  throw new Error("Verification failed: /output/entry.txt does not match the line");
}
