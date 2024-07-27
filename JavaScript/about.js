document.addEventListener('DOMContentLoaded', () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const words = ["ABOUTUS", "OURMISSION", "OURTEAM", "OURSTORY", "OURVALUES", "PORTFOLIO", "CONTACTUS"];
    const numRows = 14;
    const numCols = 26;
    const tableContainer = document.querySelector('.table-container');
    const table = document.querySelector('.crossword-table');

    // Generate random alphabets for the table
    function generateRandomTable() {
        for (let i = 0; i < numRows; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < numCols; j++) {
                const cell = document.createElement('td');
                row.appendChild(cell);
            }
            table.appendChild(row);
        }

        words.forEach(word => {
            let row = Math.floor(Math.random() * numRows);
            let col = Math.floor(Math.random() * (numCols - word.length));
            for (let i = 0; i < word.length; i++) {
                table.rows[row].cells[col + i].textContent = word[i];
            }
        });

        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                if (!table.rows[i].cells[j].textContent) {
                    table.rows[i].cells[j].textContent = alphabet[Math.floor(Math.random() * alphabet.length)];
                }
            }
        }
    }

    generateRandomTable();

    // Animate the scattered alphabets
    function scatterAndGather() {
        const alphabets = [];
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                const span = document.createElement('span');
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
                const row = Math.floor(index / numCols);
                const col = index % numCols;
                span.style.left = `${table.rows[row].cells[col].getBoundingClientRect().left + window.scrollX}px`;
                span.style.top = `${table.rows[row].cells[col].getBoundingClientRect().top + window.scrollY}px`;
                span.classList.add('final');
            });
        }, 100);

        setTimeout(() => {
            alphabets.forEach(span => span.remove());
            tableContainer.style.visibility = 'visible';
        }, 1600);
    }

    scatterAndGather();
});
