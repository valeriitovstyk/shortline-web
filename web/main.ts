import './style.css';

const commit = __BUILD_SHA__;
const app = document.querySelector<HTMLElement>('#app');
if (!app) throw new Error('Missing app root');

app.innerHTML = `
  <section class="shell">
    <p class="eyebrow">ShortLine · 1992 → Web</p>
    <h1>ShortLine Web</h1>
    <p class="subtitle">The original railway puzzle, on a new platform.</p>
    <div class="field" role="img" aria-label="Illustrated railway field">
      <div class="track track-a"></div><div class="track track-b"></div>
      <div class="station"></div><div class="signal"></div>
      <div class="train"><span></span><span></span><span></span></div>
    </div>
    <p class="status">The WebAssembly game is under construction.</p>
    <footer>Iteration 1 · ${commit} · <a href="https://github.com/valeriitovstyk/shortline-web">Source</a> · <a href="https://github.com/konovalov-aleks/reSL">reSL</a> · <a href="https://www.gnu.org/licenses/gpl-3.0.html">GPLv3</a></footer>
  </section>`;
