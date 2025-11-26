//* Load ASCII art from file
fetch('./assets/art/sauron.txt')
  .then(response => response.text())
  .then(art => {
    document.getElementById('art').textContent = art;
  });

//* Delete ASCII art when clicking bin icon
const deleteBtn = document.getElementById('delete-btn');
if (deleteBtn) {
  deleteBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('art').textContent = '';
  });
}

//* Handle link clicks
document.body.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    window.open(e.target.href, '_blank');
  }
});

//* Handle command input
const commandInput = document.getElementById('command-input');
const artElement = document.getElementById('art');

commandInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const command = commandInput.value.trim().toLowerCase();

    if (command === 'alpine') {
      window.location.href = '/alpine';
    } else if (command === 'arch') {
      window.location.href = '/arch';
    } else if (command === 'vase') {
      window.location.href = '/vase';
    } else if (command === 'help') {
      artElement.textContent = `Available Commands:

  Nobody there to help you, only yourself.

  alpine  - Launch Alpine v86
  arch    - Launch Arch v86
  vase    - Launch Vase
  repos   - Show repository links
  help    - Show this help message
  `;
      commandInput.value = '';
    } else if (command === 'repos') {
      artElement.innerHTML = `Repositories:

  <a href="https://github.com/h8d13/Vase" target="_blank">Arch Installer</a>
  <a href="https://github.com/h8d13/VaseX" target="_blank">Artix Installer</a>
  <a href="https://github.com/ryk4rd/grimaur" target="_blank">110k+ AUR Packages</a>
  <a href="https://github.com/h8d13/TERCES" target="_blank">U2F Fido2 Keys</a>
  `;
      commandInput.value = '';
    } else {
      commandInput.value = '';
    }
  }
});
