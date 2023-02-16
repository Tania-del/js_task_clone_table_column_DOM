'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const secondColumnValue = table.rows[i].cells[1].innerHTML;

  const newCell = document.createElement('td');

  newCell.innerHTML = secondColumnValue;

  table.rows[i].insertCell(4).before(newCell);
}
