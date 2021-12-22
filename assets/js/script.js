var currentHour = moment().hours()


//display todays date on page 
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// background color changes depending on what time it is 
    // . past .present .future classes in css 
    // function will add the class to the the block that has time approaching 
function updateCss() {
    $(".time-block").each(function(){
       var divTime = $(this).attr("id");
       if (divTime < currentHour) {
           $(this).removeClass("present futre")
           $(this).addClass("past")
       }
       else if (divTime > currentHour) {
           $(this).removeClass("past present")
           $(this).addClass("future")
       }
       else {
           $(this).removeClass("future past")
           $(this).addClass("present")
       }
    }) 
}

updateCss();
// store text enetered into input when clicking the save button
$(".saveBtn").click(function(event) {
    event.preventDefault(); 
    var timeKey = $(this).parent().attr("id");
    var content = $(this).siblings(".description").val();

    localStorage.setItem(timeKey, content)
})

// use var timeblocks to display what info had been entered into text area 

$("#9 .description").val(localStorage.getItem("9"))
// copy above function and alternate different numbers in 