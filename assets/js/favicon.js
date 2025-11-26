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

function flash() {
  if (flashInterval) clearInterval(flashInterval);

  flashInterval = setInterval(() => {
    fi.href = `./assets/visuals/ks_32x32_${toggle ? 'd' : 'l'}.gif`;
    toggle = !toggle;
  }, 500);

  setTimeout(() => {
    clearInterval(flashInterval);
    flashInterval = null;
    update(dark);
  }, 1000);
}

//* Trigger flash on any interaction
['click', 'mousemove', 'keypress', 'scroll'].forEach(event => {
  document.addEventListener(event, flash);
});
