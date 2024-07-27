document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const accountBtn = document.querySelector('.account-btn');
    const bagBtn = document.querySelector('.bag-btn');
    const overlay = document.querySelector('.overlay');
    const overlayContent = document.querySelector('.overlay-content');
    const searchBtn = document.getElementById('search-btn');
    const searchBox = document.getElementById('search-box');
    const logoLink = document.getElementById('logo-link');

    const closeOverlay = () => {
        overlay.classList.remove('show-left', 'show-right');
    };

    const toggleDropdown = (e) => {
        const dropdown = e.currentTarget.querySelector('.dropdown');
        const arrow = e.currentTarget.querySelector('.dropdown-arrow');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        arrow.classList.toggle('rotate');
    };

    const toggleMenuDropdown = (e) => {
        const dropdownMenu = e.currentTarget.querySelector('.dropdown-menu');
        const arrow = e.currentTarget.querySelector('.dropdown-arrow');
        if (dropdownMenu) {
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
            arrow.classList.toggle('rotate');
        }
    };

    menuBtn.addEventListener('click', () => {
        overlayContent.innerHTML = document.querySelector('.menu-overlay-content').innerHTML;
        overlay.classList.remove('show-right');
        overlay.classList.add('show-left');
        document.querySelector('.language-options').addEventListener('click', toggleDropdown);
        document.querySelectorAll('.menu-items > li').forEach(item => {
            item.addEventListener('click', toggleMenuDropdown);
        });
    });

    accountBtn.addEventListener('click', () => {
        overlayContent.innerHTML = document.querySelector('.account-overlay-content').innerHTML;
        overlay.classList.remove('show-left');
        overlay.classList.add('show-right');
    });

    bagBtn.addEventListener('click', () => {
        overlayContent.innerHTML = document.querySelector('.bag-overlay-content').innerHTML;
        overlay.classList.remove('show-left');
        overlay.classList.add('show-right');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-btn') || e.target === overlay) {
            closeOverlay();
        }
    });

    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', (e) => {
        if (!searchBtn.contains(e.target) && !searchBox.contains(e.target)) {
            searchBox.style.display = 'none';
        }
    });

    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'index.html';
    });
});
