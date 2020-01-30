const m = moment;

var words;
var hourInfo;

$("#currentDate").text(m.format("dddd, MMMM Do"));

$(document).ready(function() {
    selectHour ();
    renderText ();

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
