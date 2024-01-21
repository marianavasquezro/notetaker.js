const noteList = document.getElementById('note-list');

function addNote() {
    const noteText = document.getElementById('noteText').value.trim();
    const textColor = document.getElementById('textColor').value;
    const bgColor = document.getElementById('bgColor').value;

    if (noteText === '') {
        alert('Please enter your note.');
        return;
    }
    const userEmail = prompt('Please enter your email address to receive the note:');
    if (userEmail === null) {
        // User clicked Cancel in the prompt
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        alert('Invalid email address. Please enter a valid email.');
        return;
    }

    const noteItem = document.createElement('li');
    noteItem.textContent = noteText;
    noteItem.style.color = textColor;
    noteItem.style.backgroundColor = bgColor;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function () {
        removeNote(noteItem);
    };

    noteItem.appendChild(removeButton);
    noteList.appendChild(noteItem);
    
    sendNoteToEmail(userEmail, noteText, textColor, bgColor);
    document.getElementById('noteText').value = '';
}
function removeNote(noteItem) {
    noteList.removeChild(noteItem);
}

