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

    // Table animation
    const tableContainer = document.querySelector('.table-container');
    const table = document.querySelector('.crossword-table');

    const words = ["ABOUTUS", "OURMISSION", "OURTEAM", "OURVALUES", "OURSTORY", "PORTFOLIO", "CONTACTUS"];
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numRows = 14;
    const numCols = 26;

    // Generate empty table
    for (let i = 0; i < numRows; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < numCols; j++) {
            let cell = document.createElement('td');
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    // Place words in random positions
    words.forEach(word => {
        let row = Math.floor(Math.random() * numRows);
        let col = Math.floor(Math.random() * (numCols - word.length + 1));
        for (let i = 0; i < word.length; i++) {
            table.rows[row].cells[col + i].textContent = word[i];
        }
    });

    // Fill the rest of the table with random alphabets
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (!table.rows[i].cells[j].textContent) {
                table.rows[i].cells[j].textContent = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }

    const animateAlphabets = () => {
        const alphabets = [];
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                let span = document.createElement('span');
                span.textContent = table.rows[i].cells[j].textContent;
                span.style.left = `${Math.random() * window.innerWidth}px`;
                span.style.top = `${Math.random() * window.innerHeight}px`;
                span.classList.add('alphabet');
                document.body.appendChild(span);
                alphabets.push(span);
            }
        }

        setTimeout(() => {
            alphabets.forEach((span, index) => {
                span.style.left = `${table.rows[Math.floor(index / numCols)].cells[index % numCols].offsetLeft + tableContainer.offsetLeft}px`;
                span.style.top = `${table.rows[Math.floor(index / numCols)].cells[index % numCols].offsetTop + tableContainer.offsetTop}px`;
                span.classList.add('final');
            });
        }, 100);

        setTimeout(() => {
            alphabets.forEach(span => span.remove());
        }, 1600);
    };

    animateAlphabets();

    /*for script.js*/
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
    /*//for script.js// */
});
