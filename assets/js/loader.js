//* Load ASCII art from file
fetch('./assets/art/sauron.txt')
  .then(response => response.text())
  .then(art => {
    document.getElementById('art').textContent = art;
  });

//* Redirect to /alpine when user types "alpine"
document.body.addEventListener('input', function(e) {
  const text = document.body.textContent.trim().toLowerCase();
  if (text === 'alpine') {
    window.location.href = '/alpine';
  }
  if (text === 'arch') {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://copy.sh/v86/?profile=archlinux';
    iframe.style.width = '100%';
    iframe.style.height = '600px';
    iframe.style.border = 'none';
    document.body.appendChild(iframe);
  }
});
