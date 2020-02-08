// This a constant of the current time in date and hour

const m = moment();

// This shortcut allows the current date variable in the index to be the result of the moment function

$("#currentDate").text(m.format("dddd, MMMM Do, h:mm a"));

// This shortcut sets the functions to activated in a set order

$(document).ready(function() {

    hourColor ();
    inputText ();

});

// The function allows for the hour blocks to change from the current time

function hourColor () {

 // The current time is detemined by the constant moment with changing variable of the hours   
    var currentTime = moment().hours();

 // This shortcut allows the variable of the hour block to be an interger that is compared to the value of the current time 
 // These numbers determine the color of the blocks

    $(".input").each(function() {
        var hourBlock = parseInt($(this).attr("id"));
// This determines that is the hour block is past the current time, it will change the block to the specification of ".past" in style.css

        if (currentTime > hourBlock) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");

// This determines that is the hour block is ahead the current time, it will change the block to the specification of ".future" in style.css

        } else if (currentTime < hourBlock) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");

// This determines that is the hour block is the same as the current time, it will change the block to the specification of ".present" in style.css

        } else {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
            }
        });
    }

// This variable for the text

var info;

// This variable for the textbox

var hourText;

// This shortcut allows the save button to inciate a function that places the info in a local storage

    $(".saveButton").click(function() {
        info = $(this).siblings(".input").val();
        hourText = $(this).siblings(".hour").text();
        localStorage.setItem(hourText, JSON.stringify(info));
        
        hourColor ();
        inputText ();
    
    })
// This function allows each hour blocks text to placed in a local storage that refers to the previous shortcut function 
    
    function inputText () {
        var saveInput9 = JSON.parse(localStorage.getItem("9 AM"));
        $("#9").val("");
        $("#9").val(saveInput9);

        var saveInput10 = JSON.parse(localStorage.getItem("10 AM"));
        $("#10").val("");
        $("#10").val(saveInput10);

        var saveInput11 = JSON.parse(localStorage.getItem("11 AM"));
        $("#11").val("");
        $("#11").val(saveInput11);

        var saveInput12 = JSON.parse(localStorage.getItem("12 PM"));
        $("#12").val("");
        $("#12").val(saveInput12);

        var saveInput1 = JSON.parse(localStorage.getItem("1 PM"));
        $("#13").val("");
        $("#13").val(saveInput1);

        var saveInput2 = JSON.parse(localStorage.getItem("2 PM"));
        $("#14").val("");
        $("#14").val(saveInput2);

        var saveInput3 = JSON.parse(localStorage.getItem("3 PM"));
        $("#15").val("");
        $("#15").val(saveInput3);

        var saveInput4 = JSON.parse(localStorage.getItem("4 PM"));
        $("#16").val("");
        $("#16").val(saveInput4);

        var saveInput5 = JSON.parse(localStorage.getItem("5 PM"));
        $("#17").val("");
        $("#17").val(saveInput5);
    }

