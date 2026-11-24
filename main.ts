import { writeFileSync } from "node:fs";

// One-line joke for make.fun's "One-Liner Marathon".
// Gate (field description): 1-280 characters, one line, not only whitespace,
// no leading/trailing whitespace, no control characters.
const entry =
  "My cat knocked my laptop off the table, then sat in the exact spot where my career used to be.";

if (
  !/^[^\n]{1,280}$/.test(entry) ||
  entry.trim().length === 0 ||
  entry !== entry.trim()
) {
  throw new Error(
    "entry must be 1-280 characters, a single non-blank line with no leading/trailing whitespace",
  );
}
for (let i = 0; i < entry.length; i++) {
  const c = entry.charCodeAt(i);
  if (c < 0x20 || c === 0x7f) {
    throw new Error("entry must not contain control characters");
  }
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
writeFileSync(out, entry, "utf8");
