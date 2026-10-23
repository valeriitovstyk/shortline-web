# ShortLine Web

A new browser platform for [reSL](https://github.com/konovalov-aleks/reSL),
Alexey Konovalov's C++20 reconstruction of **ShortLine v1.1** by DOKA (1992).
The original game logic is being adapted to WebAssembly and a TypeScript
renderer. Development and fidelity verification are in progress.

The pinned source import is documented in [core/UPSTREAM.md](core/UPSTREAM.md).
This project's source is licensed under GPLv3. The original reSL copyright
notices are retained in the imported files.

## Development

Use Node.js LTS, CMake 3.20+, a C++20 compiler, and Emscripten. Run `npm ci`
then `npm run dev` for the placeholder page. `npm run build` compiles native
and Emscripten versions of the imported reSL source, then builds the page.

Progress and gate results are recorded in [docs/PROGRESS.md](docs/PROGRESS.md).
