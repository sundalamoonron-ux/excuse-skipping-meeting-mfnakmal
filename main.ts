import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Excuse for Skipping a Meeting
// One razor-sharp line: a self-referential loop — double-booked with the
// very meeting about why there are too many meetings. Setup -> punchline,
// everyday office subject, no stock excuse (no wifi, no cat, no dentist).
const line =
  "Can't make it — I'm double-booked with the meeting about why we have too many meetings.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
