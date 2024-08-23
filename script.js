const empCards = [
    {
        img: '',
        name: '',
        company: '',
        division: '',
        position: '',
        location: ''
    }
];

// Fetch the CSV data
fetch('data.csv')
    .then(response => response.text())
    .then(data => {
        // Parse the CSV data
        const rows = data.split('\n');
        const empCards = rows.slice(1).map(row => {
            const columns = row.split(',');
            return {
                img: columns[0],
                name: columns[1],
                company: columns[2],
                division: columns[3],
                position: columns[4],
                location: columns[5]
            };
        });

        function createCard(person) {
            return `
                <div class="card">
                    <img class="avatar" src="${person.img}" alt="${person.name}">
                    <h3>${person.name}</h3>
                    <h2>${person.company}</h2>
                    <h4>${person.division}</h4>
                    <p>${person.position}</p>
                    <h4>${person.location}</h4>
                </div>
            `;
        }

        function displayCards(data, containerId, division) {
            const filteredData = data.filter(person => person.division === division);
            const container = document.getElementById(containerId);
            container.innerHTML = filteredData.map(createCard).join('');
        }

        // Display the cards
        displayCards(empCards, 'it-management','IT Management');
        displayCards(empCards, 'it-business-services','IT Business Services');
        displayCards(empCards, 'it-core-services','IT Core Services');
        displayCards(empCards, 'it-operational-execution','IT Operational Execution');
        displayCards(empCards, 'it-platform-Development','IT Platform and Development');
        displayCards(empCards, 'it-product-bakeries','IT Product Bakeries');
        displayCards(empCards, 'it-scrum','IT Scrum');
        displayCards(empCards, 'it-service-delivery','IT Service Delivery');
        displayCards(empCards, 'it-service-delivery-app','IT Service Delivery (App Support)');
        displayCards(empCards, 'it-tender-procurement','IT Tender and Procurement');
    })
    .catch(error => console.error('Error:', error));