$(document).ready(function () {

var dataInput = document.querySelector(".description");

var today = moment();
$("#currentDay").text(today.format('dddd, MMMM Do'));

$(".saveBtn").on("click", function (event) {
    event.preventDefault();

 var dataInfo = {
    dataInput: dataInput.value
};

localStorage.setItem("dataInfo", "fghbnj");

var myVariable = localStorage.getItem("dataInfo");
console.log(myVariable);
    
});



function hourTracker () {

    var currentHour = moment().hour();

    $(".time-block").each(function() {
        var timeBlock = $(this).attr(".time-block")
        console.log(this);

    if (timeBlock === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    } 
    if (timeBlock < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("past");
    }
    else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    }
})
    
}

hourTracker();
})
