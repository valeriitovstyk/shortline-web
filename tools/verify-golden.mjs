import { existsSync, readdirSync } from 'node:fs';

const directory = new URL('../tests/golden/', import.meta.url);
if (!existsSync(directory)) throw new Error('Missing golden directory');
const entries = readdirSync(directory).filter((entry) => !entry.startsWith('.'));
if (entries.length !== 0) throw new Error('Iteration 1 expects an empty golden set');
console.log('Golden set: empty (iteration 1)');
