
        async function fetchBusData() {
            try {
                const response = await fetch('http://localhost:3000/buses'); // Replace with your JSON server URL.
                if (!response.ok) {
                    throw new Error('Unable to fetch bus information');
                }
                const data = await response.json();

                const busCardsContainer = document.getElementById('busCards');

                data.forEach(bus => {
                    const busCard = document.createElement('div');
                    busCard.classList.add('bus-card');
                    busCard.innerHTML = `
                        <h2>${bus.route}</h2>
                        <img src="${bus.imageUrl}" alt="${bus.route}" style="max-width: 100%;">
                        <p>Price: $${bus.price.toFixed(2)}</p>
                        
                    
                    `;
                    busCardsContainer.appendChild(busCard);
                });
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchBusData();
    