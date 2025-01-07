# Multiplication Table Generator

A simple web-based tool to generate a multiplication table for any number within a customizable range. This project demonstrates the use of **HTML**, **CSS**, and **JavaScript** to create an interactive and user-friendly multiplication calculator.

---

## Features

1. **Dynamic Multiplication Table**:
   - Enter a number, specify a range, and generate a multiplication table.
   - The table is displayed dynamically in the browser.

2. **Customizable Range Slider**:
   - Adjust the range of the multiplication table using a slider for real-time updates.

3. **Theme Toggle**:
   - Switch between light and dark themes for better user experience.

4. **Download Table as CSV**:
   - Download the generated multiplication table in CSV format.

5. **Clear Table**:
   - Clear the table with a single click.

---

## Technologies Used

- **HTML**: Structure of the calculator.
- **CSS**: Styling, including light and dark themes.
- **JavaScript**: Logic for generating the table, theme toggle, and CSV download.

---

## How to Use

1. Open the project in your browser.
2. Enter a number in the input box.
3. Adjust the range slider to set the multiplication range.
4. Click the "Generate Table" button to display the table.
5. Use the "Clear Table" button to reset the table.
6. Download the generated table as a CSV file using the "Download as CSV" button.
7. Toggle between light and dark themes using the "Toggle Theme" button.

---

## Example Output

When you enter `5` and select a range of `10`, the generated table will look like:

| Number | Multiplier | Result |
|--------|------------|--------|
| 5      | 1          | 5      |
| 5      | 2          | 10     |
| 5      | 3          | 15     |
| ...    | ...        | ...    |
| 5      | 10         | 50     |

---

## Key Functions Explained

### JavaScript Functionalities:
1. **Table Generation**:
   - `for` loop iterates through the range, creating rows dynamically with `insertRow()` and `innerHTML`.

2. **Range Slider**:
   - `input` event updates the range value display in real time.

3. **Theme Toggle**:
   - Toggles a `dark-theme` class on the `<body>` element to switch between themes.

4. **CSV Download**:
   - Converts the table rows into a CSV string and triggers a download.

5. **Clear Table**:
   - Resets the table by clearing its `innerHTML`.

---

## Code Snippets

### Table Generation Code
```javascript
document.getElementById('generate-btn').addEventListener('click', () => {
  const number = parseInt(document.getElementById('number').value);
  const range = parseInt(document.getElementById('range').value);
  const table = document.getElementById('multiplication-table');
  table.innerHTML = '';

  const headerRow = table.insertRow();
  headerRow.insertCell(0).textContent = `Multiplication Table for ${number}`;
  for (let i = 1; i <= range; i++) {
    const row = table.insertRow();
    row.innerHTML = `<td>${number}</td><td>${i}</td><td>${number * i}</td>`;
  }
});

---

### Toggle Theme
  document.getElementById('theme-toggle-btn').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

### Download Table as CSV
document.getElementById('download-btn').addEventListener('click', () => {
  const table = document.getElementById('multiplication-table');
  let csvContent = "data:text/csv;charset=utf-8,";
  for (const row of table.rows) {
    const rowData = Array.from(row.cells).map(cell => cell.textContent);
    csvContent += rowData.join(",") + "\r\n";
  }
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "multiplication_table.csv");
  link.click();
});

---