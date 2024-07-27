document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const lineRadios = document.querySelectorAll('.line-radio');
    let currentIndex = 0;

    const grids = document.querySelector('.grids');
    const gridGroups = document.querySelectorAll('.grid-group');
    const leftArrow = document.querySelector('.grid-arrow.left-arrow');
    const rightArrow = document.querySelector('.grid-arrow.right-arrow');
    const gridLineRadios = document.querySelectorAll('.grid-line-radio');
    let gridIndex = 0;

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
        gridGroups.forEach((group, i) => {
            group.style.display = i === index ? 'flex' : 'none';
        });
        gridLineRadios.forEach((radio, i) => {
            radio.classList.toggle('active', i === index);
        });
        gridIndex = index;
    };

    leftArrow.addEventListener('click', () => {
        gridIndex = (gridIndex > 0) ? gridIndex - 1 : gridGroups.length - 1;
        showGridGroup(gridIndex);
    });

    rightArrow.addEventListener('click', () => {
        gridIndex = (gridIndex < gridGroups.length - 1) ? gridIndex + 1 : 0;
        showGridGroup(gridIndex);
    });

    gridLineRadios.forEach((radio, index) => {
        radio.addEventListener('click', () => {
            showGridGroup(index);
        });
    });

    showGridGroup(gridIndex);

    const productContainer = document.querySelector('.products');
    const productGroups = document.querySelectorAll('.product-group');
    const productLeftArrow = document.querySelector('.product-arrow.left-arrow');
    const productRightArrow = document.querySelector('.product-arrow.right-arrow');
    const productLineRadios = document.querySelectorAll('.product-navigation .line-radio');
    let productIndex = 0;

    const showProductGroup = (index) => {
        productGroups.forEach((group, i) => {
            group.style.display = i === index ? 'flex' : 'none';
        });
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

    const artistContainer = document.querySelector('.artists');
    const artistGroups = document.querySelectorAll('.artist-group');
    const artistLeftArrow = document.querySelector('.artist-arrow.left-arrow');
    const artistRightArrow = document.querySelector('.artist-arrow.right-arrow');
    const artistLineRadios = document.querySelectorAll('.artist-navigation .line-radio');
    let artistIndex = 0;

    const showArtistGroup = (index) => {
        artistGroups.forEach((group, i) => {
            group.style.display = i === index ? 'flex' : 'none';
        });
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
