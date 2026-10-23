import { defineConfig } from 'vite';
import { execFileSync } from 'node:child_process';

const sha = process.env.GITHUB_SHA?.slice(0, 7) ?? execFileSync('git', ['rev-parse', '--short=7', 'HEAD'], { encoding: 'utf8' }).trim();

export default defineConfig({
  base: '/shortline-web/',
  root: 'web',
  define: { __BUILD_SHA__: JSON.stringify(sha) },
  build: { outDir: '../dist', emptyOutDir: true },
});
