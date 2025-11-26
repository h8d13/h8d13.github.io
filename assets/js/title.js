//* Typewriter effect for title
const title = 'Svege';
let i = 0;

function typeWriter() {
  if (i < title.length) {
    document.title = title.substring(0, i + 1);
    i++;
    setTimeout(typeWriter, 200);
  }
}

function startTypeWriter() {
  i = 0;
  document.title = '';
  typeWriter();
}

startTypeWriter();
window.addEventListener('focus', startTypeWriter);
