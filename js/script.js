
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



        document.getElementById('subscribeButton').addEventListener('click', function () {
            const email = document.getElementById('emailInput').value;
            if (isValidEmail(email)) {
                document.getElementById('subscriptionMessage').textContent = 'Subscription Successful';
                // Here, you can add code to send the email to your server or perform other actions.
            } else {
                document.getElementById('subscriptionMessage').textContent = 'Invalid email. Please enter a valid email address.';
            }
        });

        function isValidEmail(email) {
            // Simple email validation. You can use a more robust validation method.
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        document.getElementById('loadContentButton').addEventListener('click', function () {
            // Create and append content to the content container
            const contentContainer = document.getElementById('contentContainer');
            const contentElement = document.createElement('div');
            contentElement.textContent = 'The Subscription was successful';
            contentContainer.appendChild(contentElement);
        });
    