//displays current day and time
const date = $("#currentDay")
date.text(moment().format("dddd, MMMM Do, YYYY"));


$(".saveBtn").on("click", function () {
    var taskText = $(this).parent(".text-area").val(); 
    var taskTime = $(this).parent("id").val();

    //set local storage 
    localStorage.setItem(taskTime, taskText);
})

$("#9am .text-area").val(localStorage.getItem("9am"));
$("#10am .text-area").val(localStorage.getItem("10am"));
$("#11am .text-area").val(localStorage.getItem("11am"));
$("#12am .text-area").val(localStorage.getItem("12am")); //not working?
$("#1pm .text-area").val(localStorage.getItem("13pm"));
$("#2pm .text-area").val(localStorage.getItem("14pm"));
$("#3pm .text-area").val(localStorage.getItem("15pm"));
$("#4pm .text-area").val(localStorage.getItem("16pm"));
$("#5pm .text-area").val(localStorage.getItem("17pm"));


function currentTime() {
    //get current number of hours
    var currentTime = moment().hour(); 

    //loop over time blocks???
    $(".time-block").each(function() {
        var currentHour = parseInt($(this));

        //if the time is past or not and adds the css style
         if (currentHour < currentTime) {
             $(this).addClass("past");
             $(this).removeClass("future");
             $(this).removeClass("present");
             console.log(currentTime);
         }
        
         else if (currentHour === currentTime) {
             $(this).removeClass("past");
             $(this).addClass("present");
             $(this).removeClass("future");
         }
         else {
             $(this).removeClass("present");
             $(this).removeClass("past");
             $(this).addClass("future");
         }
     })
}
currentTime();
