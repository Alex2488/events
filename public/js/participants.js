document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('event');
    if (eventId) {
        fetchParticipants(eventId);
    }
});

function fetchParticipants(eventId) {
    fetch(`http://localhost:5000/api/registrations/${eventId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => displayParticipants(data))
        .catch(error => console.error('Error fetching participants:', error));
}

function displayParticipants(participants) {
    const participantsList = document.getElementById('participants-list');
    if (!participantsList) {
        console.error('Participants list element not found');
        return;
    }

    participantsList.innerHTML = ''; // Clear any existing content

    if (participants.length === 0) {
        participantsList.innerHTML = '<p>No participants registered for this event yet.</p>';
        return;
    }

    participants.forEach(participant => {
        const participantElement = document.createElement('div');
        participantElement.className = 'participant bg-white p-6 rounded-lg shadow-md flex flex-col justify-between';
        participantElement.innerHTML = `
            <h2 class="text-2xl font-bold mb-2">${participant.fullName}</h2>
            <p class="text-gray-700 mb-4">${participant.email}</p>
        `;
        participantsList.appendChild(participantElement);
    });
}
