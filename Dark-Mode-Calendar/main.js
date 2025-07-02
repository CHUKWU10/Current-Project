const monthYear = document.getElementById("month-year");
const calendarBody = document.getElementById("calendar-body");
let currentDate = new Date();

function generateCalendar(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    monthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

    // Clear previous calendar
    calendarBody.innerHTML = "";

    // Get first day of the month
    const firstDay = new Date(year, month, 1).getDay();
    // Get total days in the month
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Create empty cells for the first week
    let row = document.createElement("tr");
    for (let i = 0; i < firstDay; i++) {
        row.appendChild(document.createElement("td"));
    }

    // Fill in the days of the month
    for (let day = 1; day <= totalDays; day++) {
        if (row.children.length === 7) {
            calendarBody.appendChild(row);
            row = document.createElement("tr");
        }
        const cell = document.createElement("td");
        cell.textContent = day;
        row.appendChild(cell);
    }

    // Append the last row if it has any cells
    if (row.children.length > 0) {
        calendarBody.appendChild(row);
    }

const today = new Date();
    if (year === today.getFullYear() && month === today.getMonth()) {
        const cells = calendarBody.querySelectorAll("td");
cells.forEach(cell => {
  if (parseInt(cell.textContent) === today.getDate()) {
    cell.classList.add("today");
  }
});

        }
    }

function changeMonth(step){
    currentDate.setMonth(currentDate.getMonth() + step);
// generateCalendar(currentDate);
generateCalendar(currentDate);
}
