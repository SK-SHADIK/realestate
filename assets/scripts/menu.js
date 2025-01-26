const hamburger = document.getElementById('hamburger');
const menuDropdown = document.getElementById('menuDropdown');
const searchHamburger = document.getElementById('searchHamburger');
const searchBar = document.getElementById('searchBar');
const advancedSearch = document.getElementById('advancedSearch');
const advancedBtn = document.querySelector('.advanced-btn');
const otherFeaturesCheckbox = document.getElementById('otherFeatures');
const otherOptions = document.getElementById('otherOptions');

// Toggle the menu and hamburger icon
hamburger.addEventListener('click', () => {
    menuDropdown.classList.toggle('active');
    hamburger.classList.toggle('active'); // Toggle the cross icon
});

// Toggle the search bar visibility and icon
searchHamburger.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    searchHamburger.classList.toggle('active'); // Toggle the cross icon
});

// Show/hide advanced search fields
advancedBtn.addEventListener('click', () => {
    advancedSearch.classList.toggle('active');
    advancedBtn.textContent = advancedSearch.classList.contains('active') ? 'Hide Advanced' : 'Advanced';
});

// Toggle visibility of other features checkboxes
otherFeaturesCheckbox.addEventListener('change', () => {
    otherOptions.style.display = otherFeaturesCheckbox.checked ? 'block' : 'none';
});

// Close menu when any link is clicked
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuDropdown.classList.remove('active');
        hamburger.classList.remove('active'); // Revert to hamburger icon
    });
});