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

//* Redirect to /alpine when user types "alpine"
//* Redirect to /arch when user types "arch"
//* Show help when user types "help"
document.body.addEventListener('input', function(e) {
  const text = document.body.textContent.trim().toLowerCase();
  if (text === 'alpine') {
    window.location.href = '/alpine';
  }
  if (text === 'arch') {
    window.location.href = '/arch';
  }
  if (text === 'help') {
    document.body.contentEditable = 'false';
    const artElement = document.getElementById('art');
    artElement.textContent = `Available Commands:

  alpine  - Launch Alpine v86 VM
  arch    - Launch Arch v86 VM
  help    - Show this help message
  `;
    // Remove the typed "help" text
    const textNodes = [];
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    while (walker.nextNode()) {
      if (walker.currentNode !== artElement.firstChild && walker.currentNode.textContent.trim() === 'help') {
        textNodes.push(walker.currentNode);
      }
    }
    textNodes.forEach(node => node.textContent = '');
    document.body.contentEditable = 'true';
  }
});
