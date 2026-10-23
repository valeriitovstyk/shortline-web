# Imported reSL source

- Fork: <https://github.com/valeriitovstyk/train_fork>
- Source branch: `main`
- Pinned commit: `470cca330ee9abcf6173c843f4c89686c0c7e525`
- Import commit: `136772c`
- Imported paths: `src/`, `resources/`, `CMakeLists.txt`, preserving their paths under `core/`.

The import commit contains no source edits. Subsequent changes to imported
files will be isolated in later commits with their reason documented here.

## Setup adaptation

`core/CMakeLists.txt` uses `CMAKE_CURRENT_SOURCE_DIR` for the source include
path so the original build can run as a subproject of the new root CMake
project. This changes no C++ source or game behavior.
