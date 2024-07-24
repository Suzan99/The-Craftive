document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebar-close');
    const dropdowns = document.querySelectorAll('.dropdown');
    const languageToggle = document.querySelector('.language-toggle');
    const languageContainer = document.querySelector('.language-container');
    const searchToggle = document.getElementById('search-toggle');
    const searchBox = document.getElementById('search-box');
    const searchClose = document.getElementById('search-close');

    menuToggle.addEventListener('click', function () {
        sidebar.style.transform = 'translateX(0)';
    });

    sidebarClose.addEventListener('click', function () {
        sidebar.style.transform = 'translateX(-100%)';
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent click event from bubbling up
            
            // Close all dropdowns except the one that was clicked
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });
            
            // Toggle the 'active' class on the clicked dropdown
            dropdown.classList.toggle('active');
        });
    });

    // Toggle language menu
    languageToggle.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent click event from bubbling up
        languageContainer.classList.toggle('active');
    });

    // Close all dropdowns if clicking outside
    document.addEventListener('click', function () {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
        languageContainer.classList.remove('active');
    });

    searchToggle.addEventListener('click', function () {
        searchBox.style.display = 'block'; // Show search box
    });

    searchClose.addEventListener('click', function () {
        searchBox.style.display = 'none'; // Hide search box
    });

    // Close the search box if clicking outside
    document.addEventListener('click', function (event) {
        if (!searchBox.contains(event.target) && event.target !== searchToggle) {
            searchBox.style.display = 'none';
        }
    });
});
