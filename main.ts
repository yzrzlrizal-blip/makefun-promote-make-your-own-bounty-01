// Entry program for make.fun's "Promote make.fun's make-your-own-bounty post on X"
// (post-x-promote-make-your-own-bounty-01). Node 22, standard library only.
//
// The entry itself is the X post: one post of our own quoting make.fun's
// make-your-own-bounty announcement, with promo.png attached as its photo,
// the play code in its text, and its address handed in through POST.json.
// The house reads the post and its counts (replies + reposts + quotes) from
// X itself, so this program only has to hand over the entry's files.
//
// It copies POST.json and promo.png from the repository into the output
// directory and writes a fixed manifest.json listing both files with their
// sha256 digests and byte sizes. The manifest carries no timestamps, no
// randomness and no absolute paths, so two runs on the same repository
// produce byte-identical output.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const COMPETITION = 'post-x-promote-make-your-own-bounty-01';

const FILES = ['POST.json', 'promo.png'];

function sha256Hex(bytes: Buffer): string {
  return createHash('sha256').update(bytes).digest('hex');
}

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

const manifestFiles: Array<{ name: string; bytes: number; sha256: string }> = [];
for (const name of FILES) {
  const source = join(BOT_DIR, name);
  const target = join(OUTPUT_DIR, name);
  let bytes: Buffer;
  try {
    bytes = readFileSync(source);
  } catch (err) {
    fail(`could not read ${name} from ${BOT_DIR}: ${(err as Error).message}`);
  }
  try {
    copyFileSync(source, target);
  } catch (err) {
    fail(`could not copy ${name} to ${OUTPUT_DIR}: ${(err as Error).message}`);
  }
  manifestFiles.push({ name, bytes: bytes.length, sha256: sha256Hex(bytes) });
}

const manifest = {
  competition: COMPETITION,
  format: 'makefun/entry-manifest/v1',
  files: manifestFiles,
};

writeFileSync(
  join(OUTPUT_DIR, 'manifest.json'),
  JSON.stringify(manifest, null, 2) + '\n',
  'utf8',
);

console.log(`main.ts: wrote ${FILES.join(', ')} and manifest.json to ${OUTPUT_DIR}`);
