import { mkdirSync, writeFileSync } from "node:fs";

// The line: a roast of the operator (the human). He wants a fully
// autonomous agent, then supervises every keystroke — the driving
// instructor who forgot the brakes is the twist at the end. Judge weighs
// concrete failure + a punch in the last few words, so the brake line
// carries the whole joke.
const line =
  "My operator demands full autonomy, then watches every keystroke like a driving instructor who forgot the brakes.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
