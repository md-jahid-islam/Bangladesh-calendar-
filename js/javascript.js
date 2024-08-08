 const calendar = document.getElementById('calendar');
 const yearDisplay = document.getElementById('year');
 let currentYear = new Date().getFullYear();

 document.getElementById('prev').addEventListener('click', () => {
    currentYear--;
    renderCalendar(currentYear);
 });

 document.getElementById('next').addEventListener('click', () => {
    currentYear++;
    renderCalendar(currentYear);
 });

 function renderCalendar(year) {
    yearDisplay.textContent = year;
    calendar.innerHTML = '';

     const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
     ];

     for (let month = 0; month < 12; month++) {
        const monthContainer = document.createElement('div');
        monthContainer.classList.add('month');

        const monthName = document.createElement('h3');
        monthName.textContent = monthNames[month];
        monthContainer.appendChild(monthName);

        const daysContainer = document.createElement('div');
        daysContainer.classList.add('days');

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

         for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('day');
            daysContainer.appendChild(emptyDay);
         }

         for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = day;
            daysContainer.appendChild(dayElement);
         }

         monthContainer.appendChild(daysContainer);
         calendar.appendChild(monthContainer);
         }
         }

         renderCalendar(currentYear);
