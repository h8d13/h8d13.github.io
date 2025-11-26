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

//* Handle link clicks in contenteditable area
document.body.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    window.open(e.target.href, '_blank');
  }
});

//* Helper function to clear typed command and show content
function showContent(command, content) {
  const editableArea = document.getElementById('editable-area');
  editableArea.contentEditable = 'false';
  const artElement = document.getElementById('art');
  artElement.innerHTML = content;
  // Remove the typed command text
  const textNodes = [];
  const walker = document.createTreeWalker(
    editableArea,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );
  while (walker.nextNode()) {
    if (walker.currentNode !== artElement.firstChild && walker.currentNode.textContent.trim() === command) {
      textNodes.push(walker.currentNode);
    }
  }
  textNodes.forEach(node => node.textContent = '');
  editableArea.contentEditable = 'true';
}

//* Redirect to /alpine when user types "alpine"
//* Redirect to /arch when user types "arch"
//* Redirect to /vase when user types "vase"
//* Show help when user types "help"
//* Show repos when user types "repos"
const editableArea = document.getElementById('editable-area');
editableArea.addEventListener('input', function() {
  const text = editableArea.textContent.trim().toLowerCase();
  if (text === 'alpine') {
    window.location.href = '/alpine';
  }
  if (text === 'arch') {
    window.location.href = '/arch';
  }
  if (text === 'vase') {
    window.location.href = '/vase';
  }
  if (text === 'help') {
    showContent('help', `Available Commands:

  alpine  - Launch Alpine v86
  arch    - Launch Arch v86
  vase    - Launch Vase
  repos   - Show repository links
  help    - Show this help message
  `);
  }
  if (text === 'repos') {
    showContent('repos', `Repositories:

  <a href="https://github.com/h8d13/Vase" target="_blank">Arch Installer</a>
  <a href="https://github.com/h8d13/VaseX" target="_blank">Artix Installer</a>
  <a href="https://github.com/ryk4rd/grimaur" target="_blank">110k+ AUR Packages</a>
  <a href="https://github.com/h8d13/TERCES" target="_blank">U2F Fido2 Keys</a>
  `);
  }
});
