const time_div = $("#currentDay")
time_div.text(moment().format("dddd, MMMM Do, YYYY"));

const nineAm = $("#9am")
const tenAm = $("#10am")
const elevenAm = $("#11am")
const twelveAm = $("#12am")
const onePm = $("#1pm")
const twoPm = $("#2pm")
const threePm = $("#3pm")
const fourPm = $("#4pm")
const fivePm = $("#5pm")

var timeArray = [
    nineAm,
    tenAm,
    elevenAm,
    twelveAm,
    onePm,
    twoPm,
    threePm,
    fourPm,
    fivePm
]


let textArea = $(".text-area")
//console.log(textArea.val());

let button = $(".save_button")

function getFromLocalStorage() {
    textArea.text = localStorage.getItem("")
}

function init() {
    getFromLocalStorage()

for (let i = 0; i < timeArray.length; i++) {
    const element = timeArray[i];
    //console.log(element);
    
    $(element).on("click", function(event){
        //console.log(event.target.className);
        if (event.target.className == "col-mb-2 save_button") {
            //console.log("click");
            var eventBlock = $(event.target).siblings()
            var timeKey = $(event.target).parent().parent().attr("id")
            //console.log(eventBlock[1].value)
            //console.log(timeKey)
            localStorage.setItem(timeKey, eventBlock[1].value)
        }
    })
    //$("#"+timeKey).children().children().siblings()
    console.log($("#"+timeArray).children().children().siblings())
    localStorage.getItem(timeKey)
    //use time array
}
}

init();