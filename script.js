window.onload = function () {
  setInterval(function () {
    var date = new Date();
    var displayDate = date.toLocaleDateString();
    var displayTime = date.toLocaleTimeString();
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = new Date();
    let displayDay = weekday[day.getDay()];

    document.getElementById("datetime").innerHTML =
      displayDay + " " + displayTime + " | " + displayDate;
  }, 1000); // 1000 milliseconds = 1 second
};
