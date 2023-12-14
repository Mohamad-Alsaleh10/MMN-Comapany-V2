

// burger icon events 
const burgerIcon = document.querySelector('.burger-icon');

// Get the burger list element
const burgerList = document.querySelector('.burger-list');
const overlayburger = document.querySelector('.overlay-burger');


// Add a click event listener to the burger icon
burgerIcon.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    // Toggle the display property of the burger list
    if (burgerList.style.display === 'none' || burgerList.style.display === '') {
        burgerList.style.display = 'block';
        overlayburger.style.display = 'block';

    } else {
        burgerList.style.display = 'none';
        overlayburger.style.display = 'none';

    }
});

// Add a click event listener to the document
document.addEventListener('click', function(event) {
    // Check if the click is within the burger list or its children
    if (!burgerList.contains(event.target)) {
        burgerList.style.display = 'none';
        overlayburger.style.display = 'none';

    }
});
    

const searchDropdown = document.querySelector('.search-dropdown');
const searchSelect = document.getElementById('search-select');

let isDropdownOpen = false;

searchSelect.addEventListener('click', function () {
    const dropdownHeight = searchDropdown.scrollHeight;
    
    if (isDropdownOpen) {
        searchDropdown.style.height = '0px';
    } else {
        searchDropdown.style.height = dropdownHeight + 'px';
    }
    
    isDropdownOpen = !isDropdownOpen;
});


fetch('https://api.mmnq8.com/api/services')
.then(response => response.json())
.then(data => {
  const servicesList = document.getElementById('services-list');

  data.data.forEach(service => {
    const listItem = document.createElement('li');
    listItem.textContent = service.name;
    listItem.addEventListener('click', () => {
      // Redirect to the services page with the selected service details
      window.location.href = `services.html?service=${service.name}`;
    });
    servicesList.appendChild(listItem);
  });
})
.catch(error => console.error('Error fetching data:', error));
