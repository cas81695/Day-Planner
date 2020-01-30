const m = moment;

var words;
var hourInfo;

$("#currentDate").text(m.format("dddd, MMMM Do"));

$(document).ready(function() {
    selectHour ();
    inputText ();

});

function selectHour () {

    var hourTime = moment().hour();

    $(".input").each(function() {
        var hourTest = parseInt($(this).attr("id"));
        if (hourTime > hourTest) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        } else if (hourTime < hourTest) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        } else {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
            }
        });
    }

    $(".saveButton").click(function() {
        words = $(this).sibilings(".input").val();
        hourInfo = $(this).sibilings(".input").val();
        localStorage.setItem(hourInfo, JSON.stringify(words));
        
        selectHour ();
        inputText ();
    
    })

    function inputText () {
        var saveInput9 = JSON.parse(localStorage.getItem("9 AM"));
        $("9").val("");
        $("9").val(saveInput9);

        var saveInput10 = JSON.parse(localStorage.getItem("10 AM"));
        $("10").val("");
        $("10").val(saveInput10);

        var saveInput11 = JSON.parse(localStorage.getItem("11 AM"));
        $("11").val("");
        $("11").val(saveInput11);

        var saveInput12 = JSON.parse(localStorage.getItem("12 PM"));
        $("12").val("");
        $("12").val(saveInput12);

        var saveInput1 = JSON.parse(localStorage.getItem("1 PM"));
        $("1").val("");
        $("1").val(saveInput1);

        var saveInput2 = JSON.parse(localStorage.getItem("2 PM"));
        $("2").val("");
        $("2").val(saveInput2);

        var saveInput3 = JSON.parse(localStorage.getItem("3 PM"));
        $("3").val("");
        $("3").val(saveInput3);

        var saveInput4 = JSON.parse(localStorage.getItem("4 PM"));
        $("4").val("");
        $("4").val(saveInput4);

        var saveInput5 = JSON.parse(localStorage.getItem("5 PM"));
        $("5").val("");
        $("5").val(saveInput5);
    }

