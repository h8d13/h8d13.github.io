const fi = document.getElementById('favicon');
//* Figure out prefer colored scheme
const dark = window.matchMedia('(prefers-color-scheme: dark)');
const update = e => fi.href = `./assets/visuals/ks_32x32_${e.matches ? 'd' : 'l'}.gif`;

//* Normal mode
update(dark);
dark.addEventListener('change', update);

//* Flash on user interaction
let flashInterval = null;
let toggle = false;

function flash(duration = 3000) {
  if (flashInterval) clearInterval(flashInterval);

  flashInterval = setInterval(() => {
    fi.href = `./assets/visuals/ks_32x32_${toggle ? 'd' : 'l'}.gif`;
    toggle = !toggle;
  }, 500);

  setTimeout(() => {
    clearInterval(flashInterval);
    flashInterval = null;
    update(dark);
  }, duration);
}

//* Trigger flash on mousemove, keypress, scroll
document.addEventListener('click', () => flash());
