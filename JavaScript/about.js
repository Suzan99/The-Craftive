document.addEventListener('DOMContentLoaded', () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const words = ["ABOUTUS", "OURMISSION", "OURTEAM", "OURSTORY", "OURVALUES", "PORTFOLIO", "CONTACTUS"];
    const numRows = 14;
    const numCols = 26;
    const tableContainer = document.querySelector('.table-container');
    const table = document.querySelector('.crossword-table');

    // Generate random alphabets for the table
    function generateRandomTable() {
        console.log("Generating table");
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
        console.log("Table generated");
    }

    generateRandomTable();

    // Animate the scattered alphabets
    function scatterAndGather() {
        console.log("Scattering alphabets");
        const alphabets = [];
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                const span = document.createElement('span');
                span.textContent = table.rows[i].cells[j].textContent;
                span.style.position = 'absolute';
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
                const targetCell = table.rows[row].cells[col];
                const rect = targetCell.getBoundingClientRect();
                span.style.left = `${rect.left + window.scrollX}px`;
                span.style.top = `${rect.top + window.scrollY}px`;
                span.classList.add('final');
            });
        }, 100);

        setTimeout(() => {
            alphabets.forEach(span => span.remove());
            tableContainer.style.visibility = 'visible';
            console.log("Table visible");
        }, 1600);
    }

    scatterAndGather();

    // Highlight "OURMISSION" on scroll
    const ourMissionCells = [];
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (
                table.rows[i].cells[j].textContent === "O" && 
                table.rows[i].cells[j + 1]?.textContent === "U" &&
                table.rows[i].cells[j + 2]?.textContent === "R" && 
                table.rows[i].cells[j + 3]?.textContent === "M" &&
                table.rows[i].cells[j + 4]?.textContent === "I" && 
                table.rows[i].cells[j + 5]?.textContent === "S" &&
                table.rows[i].cells[j + 6]?.textContent === "S" && 
                table.rows[i].cells[j + 7]?.textContent === "I" &&
                table.rows[i].cells[j + 8]?.textContent === "O" && 
                table.rows[i].cells[j + 9]?.textContent === "N"
            ) {
                for (let k = 0; k < 10; k++) {
                    ourMissionCells.push(table.rows[i].cells[j + k]);
                }
                break;
            }
        }
        if (ourMissionCells.length) break;
    }

    console.log("OURMISSION cells identified:", ourMissionCells);

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        console.log("Scrolling... current scroll position:", scrollPosition);
        if (scrollPosition > 100) { // Adjust scroll position as needed
            console.log("Adding highlight class");
            ourMissionCells.forEach(cell => {
                console.log("Highlighting cell:", cell);
                cell.classList.add('highlight');
            });
            table.querySelectorAll('td').forEach(cell => {
                if (!ourMissionCells.includes(cell)) {
                    cell.classList.add('fade');
                }
            });
            console.log("Highlighted OURMISSION");
        } else {
            console.log("Removing highlight class");
            ourMissionCells.forEach(cell => {
                console.log("Removing highlight from cell:", cell);
                cell.classList.remove('highlight');
            });
            table.querySelectorAll('td').forEach(cell => {
                if (!ourMissionCells.includes(cell)) {
                    cell.classList.remove('fade');
                }
            });
            console.log("Removed highlight from OURMISSION");
        }
    });
});
