// u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3 entry (Node 22, standard library only).
//
// A single original funny line: the excuse a developer gives when code
// breaks in production. This program writes that line, and nothing else, to
// /output/entry.txt, where the house judge reads it.
//
// Draft 1 (candidate A — staging has users):
//   "It worked in staging. Production, it turns out, has users."
//   True, but the staging-vs-production gap is the most worn excuse in the
//   book; the judge has heard it a hundred times.
//
// Draft 2 (candidate B — the 3am config edit):
//   "Someone edited the production config at 3am. That someone was me.
//   In my defence, it was 3am."
//   Good self-own with a real kicker, but the 3am defence is a familiar
//   shape and the joke leans on the hour, not on the code.
//
// Draft 3 (candidate C — the "fix typo" commit, CHOSEN): three beats —
// setup, confession, punch — and the punch reveals what really happened:
// the outage was caused by a commit whose entire message was "fix typo".
// Every developer has written that commit message and trusted it.
// Verified: 83 code points, one line, inside the 200-character gate.
//   "The outage came from a one-line change. It was mine. The line only
//   said 'fix typo'."
//
// Draft 4 (candidate D — production is not a test):
//   "The code passed every test. Unfortunately, production is not a test."
//   Clean twist on testing, but it states the obvious once you see it;
//   no confession, no surprise in the second half.
//
// Draft 5 (candidate E — the code from six months ago):
//   "Production didn't break. It just finally ran the code I wrote six
//   months ago and hoped nobody would notice."
//   A nice guilty twist, but wordy for the laugh it lands, and "hoped
//   nobody would notice" is doing most of the work.
//
// Draft 6 (candidate F — the chaos feature flag):
//   "It wasn't a bug. It was a feature flag I forgot to turn off — the
//   feature was chaos."
//   The flag joke is fresh-ish, but "the feature was chaos" is a punchline
//   that tells rather than reveals.
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 3 (chosen): the outage was a one-line change, it was mine, and the
// line only said "fix typo" — a confession with a punchline every developer
// recognises, in the exact jargon of the commit message itself.
const LINE =
  "The outage came from a one-line change. It was mine. The line only said 'fix typo'.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
