let time_div = $("#currentDay")
time_div.text(moment().format("dddd, MMMM Do, YYYY"));

let textArea = $("#text-area")
console.log(textArea.val());

let button = $("#save_button")
button.on("click", function(){
    console.log("button click")
    localStorage.setItem(1, textArea.val())
});

function getFromLocalStorage() {
    textArea.text = localStorage.getItem("1")
}

getFromLocalStorage();