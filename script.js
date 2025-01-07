// Generate Table
document.getElementById('generate-btn').addEventListener('click', () => {
    const number = parseInt(document.getElementById('number').value);
    const range = parseInt(document.getElementById('range').value);
    const table = document.getElementById('multiplication-table');
  
    if (isNaN(number) || range <= 0) {
      alert("Please enter a valid number.");
      return;
    }
  
    table.innerHTML = '';
  
    const headerRow = table.insertRow();
    const headerCell = headerRow.insertCell(0);
    headerCell.colSpan = 3;
    headerCell.textContent = `Multiplication Table for ${number}`;
    headerCell.style.textAlign = 'center';
  
    const columnRow = table.insertRow();
    columnRow.innerHTML = `
      <th>Number</th>
      <th>Multiplier</th>
      <th>Result</th>
    `;
  
    for (let i = 1; i <= range; i++) {
      const row = table.insertRow();
      row.innerHTML = `
        <td>${number}</td>
        <td>${i}</td>
        <td>${number * i}</td>
      `;
    }
  });
  
  // Clear Table
  document.getElementById('clear-btn').addEventListener('click', () => {
    document.getElementById('multiplication-table').innerHTML = '';
  });
  
  // Download as CSV
  document.getElementById('download-btn').addEventListener('click', () => {
    const table = document.getElementById('multiplication-table');
    if (table.rows.length === 0) {
      alert("No table to download. Please generate a table first.");
      return;
    }
  
    let csvContent = "data:text/csv;charset=utf-8,";
    for (const row of table.rows) {
      const rowData = Array.from(row.cells).map(cell => cell.textContent);
      csvContent += rowData.join(",") + "\r\n";
    }
  
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "multiplication_table.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  
  // Update range value dynamically
  const rangeInput = document.getElementById('range');
  const rangeValueDisplay = document.getElementById('range-value');
  rangeInput.addEventListener('input', () => {
    rangeValueDisplay.textContent = rangeInput.value;
  });
  
  // Theme Toggle
  document.getElementById('theme-toggle-btn').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
  