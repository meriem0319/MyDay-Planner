// adding the now moment info to diplay on the jumbotron
var nowTimeElement = $("#now-moment");

// function to update Date, and time every second 
function updateTime() {
    var now = moment().format("MMMM Do YYYY, [at] h:mm:ss a");
    nowTimeElement.text(now);    
}
setInterval(updateTime, 1000);