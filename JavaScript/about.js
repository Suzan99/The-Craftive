document.addEventListener('DOMContentLoaded', () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const words = ["ABOUTUS", "OURMISSION", "OURTEAM", "OURSTORY", "OURVALUES", "PORTFOLIO", "CONTACTUS"];
    const numRows = 14;
    const numCols = 26;
    const tableContainer = document.querySelector('.table-container');
    const table = document.querySelector('.crossword-table');

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

    let highlightGroup = document.createElement('div');
    highlightGroup.className = 'highlight-group';
    document.body.appendChild(highlightGroup);

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    ellipse.setAttribute("fill", "none");
    ellipse.setAttribute("stroke", "red");
    ellipse.setAttribute("stroke-width", "2");
    ellipse.setAttribute("stroke-dasharray", "1000");
    ellipse.setAttribute("stroke-dashoffset", "1000");
    ellipse.style.animation = "drawEllipse 1s forwards";
    svg.appendChild(ellipse);
    highlightGroup.appendChild(svg);

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        console.log("Scrolling... current scroll position:", scrollPosition);

        if (scrollPosition > 50) { // Adjust scroll position as needed
            console.log("Adding highlight class");

            const firstCell = ourMissionCells[0].getBoundingClientRect();
            const lastCell = ourMissionCells[ourMissionCells.length - 1].getBoundingClientRect();
            const top = firstCell.top + window.scrollY;
            const left = firstCell.left + window.scrollX;
            const width = lastCell.right - firstCell.left;
            const height = lastCell.bottom - firstCell.top;

            // Adjust oval size to fit tightly around the text
            const padding = 10; // Reduce padding for a smaller, neater circle

            // Position the oval correctly
            highlightGroup.style.top = `${top - padding}px`;
            highlightGroup.style.left = `${left - padding}px`;
            highlightGroup.style.width = `${width + padding * 2}px`;
            highlightGroup.style.height = `${height + padding * 2}px`;
            highlightGroup.style.display = 'block';

            svg.setAttribute("viewBox", `0 0 ${width + padding * 2} ${height + padding * 2}`);
            ellipse.setAttribute("cx", `${(width + padding * 2) / 2}`);
            ellipse.setAttribute("cy", `${(height + padding * 2) / 2}`);
            ellipse.setAttribute("rx", `${(width + padding) / 2}`);
            ellipse.setAttribute("ry", `${(height + padding) / 2}`);
            ellipse.style.animation = "drawEllipse 1s forwards";

            table.querySelectorAll('td').forEach(cell => {
                if (!ourMissionCells.includes(cell)) {
                    cell.classList.add('fade');
                }
            });
            console.log("Highlighted OURMISSION");
        } else {
            console.log("Removing highlight class");
            highlightGroup.style.display = 'none';

            ourMissionCells.forEach(cell => {
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
