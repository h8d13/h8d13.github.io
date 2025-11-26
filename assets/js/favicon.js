const fi = document.getElementById('favicon');
//* Figure out prefer colored scheme
const dark = window.matchMedia('(prefers-color-scheme: dark)');
const update = e => fi.href = `./assets/visuals/ks_32x32_${e.matches ? 'd' : 'l'}.gif`;

//* Normal mode
update(dark);
dark.addEventListener('change', update);

//* Toggle icon on user interaction
let toggle = false;

function toggleIcon() {
  toggle = !toggle;
  fi.href = `./assets/visuals/ks_32x32_${toggle ? 'd' : 'l'}.gif`;
}

//* Trigger toggle on any interaction
['click', 'mousemove', 'keydown', 'scroll'].forEach(event => {
  document.addEventListener(event, toggleIcon);
});
