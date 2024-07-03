interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Kenansa',
  lastName: 'Meseret',
  age: 21,
  location: 'Inda',
};

const student2: Student = {
  firstName: 'Jons',
  lastName: 'Carlos',
  age: 20,
  location: 'Zambia',
};

const studentsList: Student[] = [student1, student2];


// Create a new table element
const table = document.createElement('table');

// Create the table header row
const headerRow = document.createElement('tr');

// Add header cells
const headers = ['firstName', 'location'];
headers.forEach(header => {
  const th = document.createElement('th');
  th.textContent = header;
  headerRow.appendChild(th);
});

// Append the header row to the table
table.appendChild(headerRow);

studentsList.forEach(row => {
  const tr = document.createElement('tr');

  // Create data cells
  const nameCell = document.createElement('td');
  nameCell.textContent = row.firstName;
  tr.appendChild(nameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = row.location;
  tr.appendChild(locationCell);

  // Append the data row to the table
  table.appendChild(tr);
});


document.body.appendChild(table);
