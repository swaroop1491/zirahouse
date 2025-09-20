fetch('data.json')
    .then(response => response.json())
    .then(properties => {
        const list = document.getElementById('propertyList');
        properties.forEach(property => {
            const li = document.createElement('li');
            li.className = 'property-item';
            li.innerHTML = `
                <span class="property-title">${property.title}</span>
                <div class="property-details">
                    Location: ${property.location}<br>
                    Price: ${property.price}<br>
                    Bedrooms: ${property.bedrooms}
                </div>
            `;
            list.appendChild(li);
        });
    })
    .catch(error => {
        document.getElementById('propertyList').innerHTML = '<li>Error loading properties.</li>';
        console.error(error);
    });