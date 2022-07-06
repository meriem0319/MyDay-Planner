
    // adding the now moment info to diplay on the jumbotron

var nowTimeElement = $("#now-moment");

    // function to update Date, and time every second 

function updateTime() {
    var now = moment().format("MMMM Do YYYY, [at] h:mm:ss a");
    nowTimeElement.text(now);    
}
setInterval(updateTime, 1000);

    // Functions for the data in the calendar
    // decalring the only the HH value from moment.js so we can use it to compare

var nowHour = moment().format("HH"); 

$(".time-slot").each(function () {
    var timeSlot = $(this).attr("id").split("-")[1];
    //if the HH in nowHour is equal to the html id in its respective div then we add class present from our css
    if (nowHour === timeSlot) {
        $(this).addClass("present");
    //if the HH in nowHour is less than the html id in its respective div then we add class future from our css
    } else if (nowHour < timeSlot) {
        $(this).removeClass("present");
        $(this).addClass("future");
    //if the HH in nowHour is greater than the html id in its respective div then we add class present from our css
    } else if (nowHour > timeSlot) {        
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});

// adding event listener to save users input in the text area to local storage and setItem
$(".saveBtn").click(function (event) {
    event.preventDefault(); //so it doesn't refresh
    var textEl = $(this).siblings(".description").val();
    var timeEl = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(timeEl, textEl);
});

// now we need to use localStorage and getItem to persist the users input after we refresh
$("#hour-09 .description").val(localStorage.getItem("09"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("13"));
$("#hour-14 .description").val(localStorage.getItem("14"));
$("#hour-15 .description").val(localStorage.getItem("15"));
$("#hour-16 .description").val(localStorage.getItem("16"));
$("#hour-17 .description").val(localStorage.getItem("17"));


