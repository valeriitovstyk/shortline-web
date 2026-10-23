# Progress

## Iteration 1 — Setup

Completed locally. The pristine reSL import is pinned at
`470cca330ee9abcf6173c843f4c89686c0c7e525` in a separate first commit.
The reference worktree uses the unchanged `origin/main`; the main fork checkout
on `enhanced-graphics` was not touched. The public GitHub repository, GPLv3,
README, root CMake build, Vite/strict TypeScript placeholder, and Pages workflow
are present.

| Check | Result |
| --- | --- |
| Native build of imported core | PASS, Apple Clang 21 |
| Emscripten build of imported core | PASS, `resl.wasm` 1.7 MiB raw (temporary desktop stack) |
| Reference `origin/main` native build | PASS |
| Reference and imported binaries with dummy SDL video/audio | PASS, both remained running for 1 s without stderr |
| `npm run build` | PASS, Vite JS 0.83 KiB gzip, CSS 1.00 KiB gzip |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm test` | PASS, 1 test |
| `npm run golden` | PASS, empty iteration 1 set |
| New C++ warnings | PASS, none in imported sources; SDL2 emits existing macOS deprecation warnings and the linker reports its duplicate SDL2 static library |
| Pages deploy / live smoke | PASS, run `39947331728`; live HTTP 200, `d0c406b` visible, no browser console errors |

The iteration 1 core intentionally still contains SDL and graphics as specified
for the temporary original build. The no-SDL/no-graphics core check begins with
iteration 3. Size reporting begins with iteration 3; game and Play button begin
with iteration 5. Build logs are under
`/Users/laverka/workspace/shortline_artifacts/`.
