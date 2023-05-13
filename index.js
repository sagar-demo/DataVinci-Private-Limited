// Set the date and time when the offer ends
var endDate = new Date("2023-05-31T23:59:59").getTime();

// Update the countdown timer every second
var timer = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time remaining until the offer ends
  var timeLeft = endDate - now;

  // Display the countdown timer
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // Check if the offer has ended
  if (timeLeft < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Offer has ended.";
  }
}, 1000);
