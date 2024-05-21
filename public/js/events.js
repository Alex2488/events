document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/api/events')
        .then(response => response.json())
        .then(events => {
            const eventsContainer = document.getElementById('events');
            events.forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.className = 'bg-white p-6 rounded-lg shadow-md flex flex-col justify-between';

                eventElement.innerHTML = `
                    <div>
                        <h2 class="text-2xl font-bold mb-2">${event.title}</h2>
                        <p class="text-gray-700 mb-4">${event.description}</p>
                    </div>
                    <div class="flex justify-between mt-4">
                        <a href="register.html?event=${event.id}" class="text-blue-500 hover:underline">Register</a>
                        <a href="participants.html?event=${event.id}" class="text-blue-500 hover:underline">View</a>
                    </div>
                `;

                eventsContainer.appendChild(eventElement);
            });
        })
        .catch(error => console.error('Error fetching events:', error));
});
