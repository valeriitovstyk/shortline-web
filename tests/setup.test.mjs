import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('source pin and iteration are recorded', () => {
  assert.match(readFileSync(new URL('../core/UPSTREAM.md', import.meta.url), 'utf8'), /470cca330ee9abcf6173c843f4c89686c0c7e525/);
  assert.equal(readFileSync(new URL('../docs/ITERATION', import.meta.url), 'utf8').trim(), '1');
});
