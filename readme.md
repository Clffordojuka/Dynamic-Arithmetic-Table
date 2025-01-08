# Advanced Table Calculator

A versatile web-based tool for generating arithmetic tables for various operations such as multiplication, addition, subtraction, and division. This project leverages **HTML**, **CSS**, and **JavaScript** to create an interactive and user-friendly calculator.

---

## Features

1. **Dynamic Arithmetic Table**:
   - Choose an operation (Multiplication, Addition, Subtraction, Division) from a dropdown menu.
   - Enter a number and specify a range to generate a table dynamically.

2. **Customizable Range Slider**:
   - Adjust the range of the table using a slider for real-time updates.

3. **Theme Toggle**:
   - Switch between light and dark themes for better user experience.

4. **Download Table as CSV**:
   - Download the generated table in CSV format.

5. **Clear Table**:
   - Clear the table with a single click.

---

## Technologies Used

- **HTML**: Structure of the calculator.
- **CSS**: Styling, including light and dark themes.
- **JavaScript**: Logic for generating the table, handling operations, theme toggle, and CSV download.

---

## How to Use

1. Open the project in your browser.
2. Select an operation (Multiplication, Addition, Subtraction, Division) from the dropdown menu.
3. Enter a number in the input box.
4. Adjust the range slider to set the range for the table.
5. Click the "Generate Table" button to display the table.
6. Use the "Clear Table" button to reset the table.
7. Download the generated table as a CSV file using the "Download as CSV" button.
8. Toggle between light and dark themes using the "Toggle Theme" button.

---

## Example Output

When you select "Multiplication," enter `5`, and specify a range of `10`, the generated table will look like:

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
   - Operations are handled based on the selected option (Multiplication, Addition, Subtraction, Division).

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
// Generate Table
document.getElementById('generate-btn').addEventListener('click', () => {
  const number = parseInt(document.getElementById('number').value);
  const range = parseInt(document.getElementById('range').value);
  const operation = document.getElementById('operation').value;
  const table = document.getElementById('multiplication-table');
  table.innerHTML = '';

  const headerRow = table.insertRow();
  headerRow.insertCell(0).textContent = `${operation.charAt(0).toUpperCase() + operation.slice(1)} Table for ${number}`;

  for (let i = 1; i <= range; i++) {
    const row = table.insertRow();
    row.classList.add('table-row');

    let result;
    switch (operation) {
      case 'multiplication':
        result = number * i;
        break;
      case 'addition':
        result = number + i;
        break;
      case 'subtraction':
        result = number - i;
        break;
      case 'division':
        result = (i !== 0) ? (number / i).toFixed(2) : 'Infinity'; // Handle division by zero
        break;
    }

    row.innerHTML = `<td>${number}</td><td>${i}</td><td>${result}</td>`;
  }
});
```

### Toggle Theme
```javascript
document.getElementById('theme-toggle-btn').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
```

### Download Table as CSV
```javascript
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
  link.setAttribute("download", "arithmetic_table.csv");
  link.click();
});
```

