//* Load ASCII art from file
fetch('./assets/art/sauron.txt')
  .then(response => response.text())
  .then(art => {
    document.getElementById('art').textContent = art;
  });

//* Redirect to /alpine when user types "alpine"
//* Redirect to /arch when user types "arch"
document.body.addEventListener('input', function(e) {
  const text = document.body.textContent.trim().toLowerCase();
  if (text === 'alpine') {
    window.location.href = '/alpine';
  }
  if (text === 'arch') {
    window.location.href = '/arch';
  }
});
