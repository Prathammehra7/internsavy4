
// Set the countdown date (modify as needed)
var date = new Date("June 5, 2023 00:00:00 PM");  // change the date and time

var countdown_container = setInterval(
    function () {
        var now = new Date();
        var timeRemaining = date - now;
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        document.getElementById("countdown_container").innerHTML = days + "day " + hours + "h "
            + minutes + "m " + seconds + "s ";
        if (timeRemaining < 0) {
            clearInterval(countdown_container);
            document.getElementById("countdown_container").innerHTML = "EXPIRED Change the Date and Time";
        }
    }, 1000);