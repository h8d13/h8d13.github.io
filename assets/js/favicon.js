const fi = document.getElementById('favicon');
//*Figure out if darkmode is prefered if not set to l
const dark = window.matchMedia('(prefers-color-scheme: dark)');
const update = e => fi.href = `./assets/visuals/ks_32x32_${e.matches ? 'd' : 'l'}.gif`;
update(dark);
dark.addEventListener('change', update);
