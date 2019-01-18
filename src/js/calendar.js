$(document).ready(function () {

    function displayCalendar() {

        var htmlContent = "";
        var febNumDays = "";
        var counter = 1;

        var dateNow = new Date();
        var month = dateNow.getMonth();

        var nextMonth = month + 1; // matches current month with correct start date.
        var prevMonth = month - 1;
        var day = dateNow.getDate();
        var year = dateNow.getFullYear();


        //February is leap year or not
        if (month == 1) {
            if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
                febNumDays = 29;
            } else {
                febNumDays = 28;
            }
        }

        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        var daysPerMonth = ["31", "" + febNumDays + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

        
        var nextDate = new Date(nextMonth + ' 1 ,' + year);
        var weekDays = nextDate.getDay();
        var newWeek = weekDays;
        var numOfDays = daysPerMonth[month];

        //leave whitespace
        while (weekDays > 0) {
            htmlContent += "<td class='month-prev'></td>";

            weekDays--;
        }

        while (counter <= numOfDays) {

            // start new week
            if (newWeek > 6) {
                newWeek = 0;
                htmlContent += "</tr><tr>";
            }

            // highlight current day along with CSS
            if (counter == day) {
                htmlContent += "<td class='currentDay days'>" + counter + "</td>";
            } else {
                htmlContent += "<td class='days'>" + counter + "</td>";
            }

            newWeek++;
            counter++;

        }

        // Build the html for the calendar
        var calendarBody = "<div class='calendar__container'> <table class='calendar'> <tr class='currentMonth'><th colspan='7'>" + monthNames[month] + " " + year + "</th></tr>";
        calendarBody += "<tr class='dayNames'> <td>Sun</td> <td>Mon</td> <td>Tues</td> <td>Wed</td> <td>Thurs</td> <td>Fri</td> <td>Sat</td>  </tr>";
        calendarBody += "<tr>";
        calendarBody += htmlContent;
        calendarBody += "</tr></table> </div>";

        document.getElementById("calendar").innerHTML = calendarBody;

    }

    displayCalendar();

});