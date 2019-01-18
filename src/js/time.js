$(document).ready(function () {


    function clock() { // We create a new Date object and assign it to a variable called "time".
        var time = new Date(),
            month = time.getMonth(), // between 0-11 
            // Access the "getHours" method on the Date object with the dot accessor.
            h = time.getHours(),
            // Access the "getMinutes" method with the dot accessor.
            m = time.getMinutes(),
            s = time.getSeconds();

        document.querySelectorAll('#clock')[0].innerHTML = timeCheck(h) + ":" + timeCheck(m) + ":" + timeCheck(s); //selects the correct class and places the time within that div
        console.log(h);

        function timeCheck(i) { //sets zero for AM times
            if (i < 10) {
                i = '0' + i
            }
            return i;
        }
    }
    setInterval(clock, 500);

});