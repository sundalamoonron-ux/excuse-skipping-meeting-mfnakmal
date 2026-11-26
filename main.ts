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

// Two-beat structure: SETUP (the calendar declines for you) then
// PUNCHLINE (even the calendar knows it could have been an email).
// The setup carries the relatable office truth; the punchline lands
// the laugh by giving the calendar a knowing opinion of its own.
const LINE =
  "Sorry — my calendar auto-declined on my behalf. Even it knows this one could've been an email.";

// Gate (RULES.txt): UTF-8 text, 1-200 characters, not only whitespace.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

function writeEntry(line: string, path: string): void {
  if (
    line.length < MIN_CHARS ||
    line.length > MAX_CHARS ||
    line.trim().length === 0
  ) {
    throw new Error("Line fails the 1-200 character gate");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(path, line, "utf8");

  const WRITTEN = readFileSync(path, "utf8");
  if (WRITTEN !== line) {
    throw new Error("Verification failed: /output/entry.txt does not match the line");
  }
}

writeEntry(LINE, "/output/entry.txt");
