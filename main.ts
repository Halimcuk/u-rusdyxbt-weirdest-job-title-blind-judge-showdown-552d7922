// Entry for the make.fun "Weirdest Job Title: Blind Judge Showdown" bounty.
// Writes one job title — and nothing else — to /output/entry.txt.
//
// The title pairs a genuine old occupation (a hired mourner, paid to weep
// at funerals) with a gloriously trivial modern object of grief: cancelled
// TV shows. Real-sounding, specific, and the twist lands on first read.
import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Professional Mourner for Cancelled TV Shows";

// Fixed string only: no randomness, clock, network or environment input,
// so every run writes byte-identical output.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
