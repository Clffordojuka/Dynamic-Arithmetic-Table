// Generate Table
document.getElementById('generate-btn').addEventListener('click', () => {
    const number = parseInt(document.getElementById('number').value);
    const range = parseInt(document.getElementById('range').value);
    const table = document.getElementById('multiplication-table');
  
    // Validate inputs
    if (isNaN(number) || isNaN(range) || range <= 0) {
      alert("Please enter valid numbers for both fields, and range must be greater than 0.");
      return;
    }
  
    // Clear any previous table
    table.innerHTML = '';
  
    // Add a header with colspan
    const headerRow = table.insertRow();
    const headerCell = headerRow.insertCell(0);
    headerCell.colSpan = 3;
    headerCell.textContent = `Multiplication Table for ${number}`;
    headerCell.style.textAlign = 'center';
    headerCell.style.fontWeight = 'bold';
    headerCell.style.backgroundColor = '#007bff';
    headerCell.style.color = 'white';
  
    // Add column headers
    const columnRow = table.insertRow();
    const column1 = columnRow.insertCell(0);
    const column2 = columnRow.insertCell(1);
    const column3 = columnRow.insertCell(2);
  
    column1.textContent = "Number";
    column2.textContent = "Multiplier";
    column3.textContent = "Result";
  
    // Generate table rows
    for (let i = 1; i <= range; i++) {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
  
      cell1.textContent = number;
      cell2.textContent = i;
      cell3.textContent = number * i;
    }
  });
  
  // Clear Table
  document.getElementById('clear-btn').addEventListener('click', () => {
    const table = document.getElementById('multiplication-table');
    table.innerHTML = ''; // Clear the table content
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
  