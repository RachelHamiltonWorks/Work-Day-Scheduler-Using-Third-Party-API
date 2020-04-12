//pulls current date from moment.js and inserts in subheader  
$("#currentDay").text(moment().format("dddd[,] MMMM Do"));
 
//https://stackoverflow.com/questions/19527579/html-local-storage-with-button-click

 //function to create planner
$(document).ready(function () {
    var hours = {
        amHours: [9, 10, 11],
        pmHours: [12, 1, 2, 3, 4, 5]
    };

    var colorChangeObject = {
        amColorHours: [9, 10, 11],
        pmColorHours: [12, 1, 2, 3, 4, 5]
    };
    var i = 0;

    // Loop for adding AM hours to .container
    for (var i = 0; i < hours.amHours.length; i++) {
        var newRow = $(`<div class='row'></div>`);
        $('.container').append(newRow);
        var hrCol = $(`<div class='col-1 time-block'>${hours.amHours[i]}AM</div>`);
        var textCol = $(`<textarea class="col-10" data-time=${colorChangeObject.amColorHours[i]}>Type Notes Here</textarea>`);
        var buttonCol = $('<button class="col-1 saveBtn">Save</button>');
        $(newRow).append(hrCol, textCol, buttonCol);
    }

    //Loop for adding PM hours to .container
    for (var i = 0; i < hours.pmHours.length; i++) {
        var newRow = $(`<div class='row'></div>`);
        $('.container').append(newRow);
        var hrCol = $(`<div class='col-1 time-block'>${hours.pmHours[i]}PM</div>`);
        var textCol = $(`<textarea class="col-10" data-time=${colorChangeObject.pmColorHours[i]}>Type Notes Here</textarea>`);
        var buttonCol = $('<button class="col-1 saveBtn">Save</button>');
        $(newRow).append(hrCol, textCol, buttonCol);
    }

    // function to change color of blocks based upon current time
     function colorChange() {
        $('textarea').each(function () {
            var currentHour = parseInt(moment().hours());
            var textData = $('textarea').data('time');
            if (textData < currentHour) {
                $('textarea').removeClass("present");
                $('textarea').removeClass("future");
                $('textarea').addClass("past");
            }
            else if (textData === currentHour) {
                $('textarea').removeClass("past");
                $('textarea').removeClass("future");
                $('textarea').addClass("present");
            }
            else {
                $('textarea').removeClass("past");
                $('textarea').removeClass("present");
                $('textarea').addClass("future");
            }
            console.log(textData);
            console.log(currentHour);
        });
    };
    colorChange();


    localStorage.setItem(textCol, 'textarea');
    console.log(localStorage.getItem)

});


