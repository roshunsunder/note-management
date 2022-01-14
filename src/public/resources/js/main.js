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
    sendItemToAPI(note);
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('send').addEventListener('click', addNote);
});

function sendItemToAPI(value) {
    var req = new XMLHttpRequest();
    req.open('POST', '/add'); //we can do /add because right now, at this stage, we're sending post request to same place that we're hosting aka localhost
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(value));

    req.addEventListener('load', (e) => {
        //console.log(req.responseText);
        console.log('Request done!');
    });

    req.addEventListener('error', () => {
        console.log('Something bad happened!');
        console.log(e);
    });
}