//* Typewriter effect for title
const title = 'THE WALL';
let i = 0;

function typeWriter() {
  if (i < title.length) {
    document.title = title.substring(0, i + 1);
    i++;
    setTimeout(typeWriter, 310);
  }
}

function startTypeWriter() {
  i = 0;
  document.title = '';
  typeWriter();
}

startTypeWriter();
window.addEventListener('focus', startTypeWriter);
