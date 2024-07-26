document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const accountBtn = document.querySelector('.account-btn');
    const bagBtn = document.querySelector('.bag-btn');
    const overlay = document.querySelector('.overlay');
    const overlayContent = document.querySelector('.overlay-content');
    const searchBtn = document.getElementById('search-btn');
    const searchBox = document.getElementById('search-box');

    const slides = document.querySelectorAll('.slide');
    const lineRadios = document.querySelectorAll('.line-radio');
    let currentIndex = 0;

    const grids = document.querySelector('.grids');
    const gridGroups = document.querySelectorAll('.grid-group');
    const gridLeftArrow = document.querySelector('.grid-slider .left-arrow');
    const gridRightArrow = document.querySelector('.grid-slider .right-arrow');
    const gridLineRadios = document.querySelectorAll('.grid-line-radio');
    let gridIndex = 0;

    const products = document.querySelector('.products');
    const productGroups = document.querySelectorAll('.product-group');
    const productLeftArrow = document.querySelector('.product-slider .left-arrow');
    const productRightArrow = document.querySelector('.product-slider .right-arrow');
    const productLineRadios = document.querySelectorAll('.product-navigation .line-radio');
    let productIndex = 0;

    const artists = document.querySelector('.artists');
    const artistGroups = document.querySelectorAll('.artist-group');
    const artistLeftArrow = document.querySelector('.artist-slider .left-arrow');
    const artistRightArrow = document.querySelector('.artist-slider .right-arrow');
    const artistLineRadios = document.querySelectorAll('.artist-navigation .line-radio');
    let artistIndex = 0;

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

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${-100 * index}%)`;
            lineRadios[i].classList.toggle('active', i === index);
        });
        currentIndex = index;
    };

    const nextSlide = () => {
        showSlide((currentIndex + 1) % slides.length);
    };

    lineRadios.forEach((radio, index) => {
        radio.addEventListener('click', () => {
            showSlide(index);
        });
    });

    setInterval(nextSlide, 3000);

    showSlide(currentIndex);

    const showGridGroup = (index) => {
        grids.style.transform = `translateX(${-100 * index}%)`;
        gridLineRadios.forEach((radio, i) => {
            radio.classList.toggle('active', i === index);
        });
        gridIndex = index;
    };

    gridLeftArrow.addEventListener('click', () => {
        gridIndex = (gridIndex > 0) ? gridIndex - 1 : gridGroups.length - 1;
        showGridGroup(gridIndex);
    });

    gridRightArrow.addEventListener('click', () => {
        gridIndex = (gridIndex < gridGroups.length - 1) ? gridIndex + 1 : 0;
        showGridGroup(gridIndex);
    });

    gridLineRadios.forEach((radio, index) => {
        radio.addEventListener('click', () => {
            showGridGroup(index);
        });
    });

    showGridGroup(gridIndex);

    const showProductGroup = (index) => {
        products.style.transform = `translateX(${-100 * index}%)`;
        productLineRadios.forEach((radio, i) => {
            radio.classList.toggle('active', i === index);
        });
        productIndex = index;
    };

    productLeftArrow.addEventListener('click', () => {
        productIndex = (productIndex > 0) ? productIndex - 1 : productGroups.length - 1;
        showProductGroup(productIndex);
    });

    productRightArrow.addEventListener('click', () => {
        productIndex = (productIndex < productGroups.length - 1) ? productIndex + 1 : 0;
        showProductGroup(productIndex);
    });

    productLineRadios.forEach((radio, index) => {
        radio.addEventListener('click', () => {
            showProductGroup(index);
        });
    });

    showProductGroup(productIndex);

    const showArtistGroup = (index) => {
        artists.style.transform = `translateX(${-100 * index}%)`;
        artistLineRadios.forEach((radio, i) => {
            radio.classList.toggle('active', i === index);
        });
        artistIndex = index;
    };

    artistLeftArrow.addEventListener('click', () => {
        artistIndex = (artistIndex > 0) ? artistIndex - 1 : artistGroups.length - 1;
        showArtistGroup(artistIndex);
    });

    artistRightArrow.addEventListener('click', () => {
        artistIndex = (artistIndex < artistGroups.length - 1) ? artistIndex + 1 : 0;
        showArtistGroup(artistIndex);
    });

    artistLineRadios.forEach((radio, index) => {
        radio.addEventListener('click', () => {
            showArtistGroup(index);
        });
    });

    showArtistGroup(artistIndex);
});
