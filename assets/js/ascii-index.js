const pages = [
  './assets/art/vase.html',
  './assets/art/stardust.html'
];

let currentPage = 0;
const frame = document.getElementById('artFrame');

// Capture key events on window to work even when iframe has focus
window.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    currentPage = (currentPage + 1) % pages.length;
    frame.src = pages[currentPage];
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    frame.src = pages[currentPage];
  }
}, true); // Use capture phase to catch before iframe

// Also listen to messages from iframe (for better cross-frame communication)
window.addEventListener('message', function(e) {
  if (e.data === 'next') {
    currentPage = (currentPage + 1) % pages.length;
    frame.src = pages[currentPage];
  } else if (e.data === 'prev') {
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    frame.src = pages[currentPage];
  }
});
