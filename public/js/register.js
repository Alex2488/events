
function registerParticipant() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('event');
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const source = document.querySelector('input[name="source"]:checked').value;
    if (!eventId || !fullName || !email || !dob || !source) {
        alert('All fields are required.');
        return;
    }
    const participant = { fullName, email, dob, source, eventId };

    fetch('http://localhost:5000/api/registrations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(participant),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(participant)
            alert('Registration successful');
            window.location.href = `index.html`;
        })
        .catch(error => console.error('Error registering participant:', error));
}
