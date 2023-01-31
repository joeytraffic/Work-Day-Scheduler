// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    var currentTime = parseInt(dayjs().format('HH'));
    console.log(currentTime);
    console.log(typeof(currentTime));
    var nineAM = document.getElementById('hour-9');
    var tenAM = document.getElementById('hour-10');
    var elevenAM = document.getElementById('hour-11');
    var twelvePM = document.getElementById('hour-12');
    var onePM = document.getElementById('hour-13');
    var twoPM = document.getElementById('hour-14');
    var threePM = document.getElementById('hour-15');
    var fourPM = document.getElementById('hour-16');
    var fivePM = document.getElementById('hour-17');

    if (currentTime < 9) {
      return;
    } else if (currentTime === 9) {
      return;
    } else if (currentTime ===  10) {
      return;
    } else if (currentTime === 11) {
      return;
    } else if (currentTime === 12) {
      return;
    } else if (currentTime === 13) {
      return;
    } else if (currentTime === 14) {
      return;
    } else if (currentTime === 15) {
      return;
    } else if (currentTime === 16) {
      return;
    } else if (currentTime === 17) {
      return;
    } else if (currentTimeParsed > 17) {
      return;
    }
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  