cmake_minimum_required(VERSION 3.20)
project(shortline_web LANGUAGES C CXX)

# Iteration 1 compiles the pristine reSL source while the native harness and
# platform boundary are being developed. The imported CMake file stays intact.
add_subdirectory(core)
