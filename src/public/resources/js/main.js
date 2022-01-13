let notes = [];
//example {id: 175098730495, Subject: 'Economics', Date: '1/13/2022', Content: 'blah blah blah...'}
const addNote = (ev) => {
    ev.preventDefault();
    let note = {
        subject: document.getElementById('subject').value,
        date: document.getElementById('date').value,
        content: document.getElementById('content').value
    }
    notes.push(note);
    document.forms[0].reset();

    //for displaying inputs
    console.warn('added', {notes});
    let pre = document.querySelector('#msg pre');
    if (pre) {
        pre.textContent = '\n' + JSON.stringify(notes, '\t', 2);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addNote);
});