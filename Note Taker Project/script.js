const noteList = document.getElementById('note-list');

function addNote() {
    const noteText = document.getElementById('noteText').value.trim();
    const textColor = document.getElementById('textColor').value;
    const bgColor = document.getElementById('bgColor').value;

    if (noteText === '') {
        alert('Please enter your note.');
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

    document.getElementById('noteText').value = '';
}
function removeNote(noteItem) {
    noteList.removeChild(noteItem);
}

