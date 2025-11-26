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
function showContent(content) {
  const editableArea = document.getElementById('editable-area');
  const artElement = document.getElementById('art');

  // Update content without toggling contentEditable to preserve element state
  artElement.innerHTML = content;

  // Remove all text nodes that are not inside the art element
  const textNodes = [];
  const walker = document.createTreeWalker(
    editableArea,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        // Only accept text nodes that are NOT inside the art element
        if (!artElement.contains(node)) {
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_REJECT;
      }
    },
    false
  );
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }
  textNodes.forEach(node => node.remove());

  // Reset focus to editable area to maintain proper state
  editableArea.focus();

  // Move cursor to end of content
  const range = document.createRange();
  const selection = window.getSelection();
  range.selectNodeContents(editableArea);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}

//* Redirect to /alpine when user types "alpine"
//* Redirect to /arch when user types "arch"
//* Redirect to /vase when user types "vase"
//* Show help when user types "help"
//* Show repos when user types "repos"
const editableArea = document.getElementById('editable-area');

//* Track if a command is currently being processed
let isProcessingCommand = false;

//* Helper function to extract typed text (excluding art content)
function getTypedText() {
  const artElement = document.getElementById('art');

  // Get all text nodes that are NOT inside the art element
  const textParts = [];
  const walker = document.createTreeWalker(
    editableArea,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        if (!artElement.contains(node)) {
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_REJECT;
      }
    },
    false
  );

  while (walker.nextNode()) {
    textParts.push(walker.currentNode.textContent);
  }

  return textParts.join('').trim().toLowerCase();
}

//* Handle keyboard events to prevent breaking the editable zone and process commands
editableArea.addEventListener('keydown', function(e) {
  // Ensure the editable area remains editable
  if (!editableArea.isContentEditable) {
    editableArea.contentEditable = 'true';
  }

  // Handle Enter key for command execution
  if (e.key === 'Enter') {
    e.preventDefault();

    if (isProcessingCommand) return;

    const text = getTypedText();

    if (text === 'alpine') {
      window.location.href = '/alpine';
    } else if (text === 'arch') {
      window.location.href = '/arch';
    } else if (text === 'vase') {
      window.location.href = '/vase';
    } else if (text === 'help') {
      isProcessingCommand = true;
      showContent(`Available Commands:

  Nobody there to help you, only yourself.

  alpine  - Launch Alpine v86
  arch    - Launch Arch v86
  vase    - Launch Vase
  repos   - Show repository links
  help    - Show this help message
  `);
      isProcessingCommand = false;
    } else if (text === 'repos') {
      isProcessingCommand = true;
      showContent(`Repositories:

  <a href="https://github.com/h8d13/Vase" target="_blank">Arch Installer</a>
  <a href="https://github.com/h8d13/VaseX" target="_blank">Artix Installer</a>
  <a href="https://github.com/ryk4rd/grimaur" target="_blank">110k+ AUR Packages</a>
  <a href="https://github.com/h8d13/TERCES" target="_blank">U2F Fido2 Keys</a>
  `);
      isProcessingCommand = false;
    }
  }
});

//* Handle beforeinput to maintain proper state during deletions
editableArea.addEventListener('beforeinput', function(e) {
  // Ensure proper behavior for delete operations
  if (e.inputType === 'deleteContentBackward' || e.inputType === 'deleteContentForward' || e.inputType === 'deleteByCut') {
    // Allow default behavior but ensure contenteditable stays true
    setTimeout(() => {
      if (!editableArea.isContentEditable) {
        editableArea.contentEditable = 'true';
        editableArea.focus();
      }
    }, 0);
  }
});
