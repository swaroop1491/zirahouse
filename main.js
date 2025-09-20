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

// ...existing code...


// Hamburger menu logic
// Execute below code after menu.html is loaded


fetch('./components/menu.html')
    .then(response => response.text())
    .then(html =>  {
        document.getElementById('menuContainer').innerHTML = html;

        // Hamburger menu logic (moved here to ensure menu.html is loaded)
        const hamburger = document.getElementById('hamburgerMenu');
        const menu = document.getElementById('menuOptions');
        if (hamburger && menu) {
            hamburger.addEventListener('click', () => {
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            });
            document.addEventListener('click', (e) => {
                if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
                    menu.style.display = 'none';
                }
            });
        }
    });