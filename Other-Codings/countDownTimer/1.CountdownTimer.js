const countBtn = document.getElementById("countBtn");
const inputEle = document.getElementById("date-time");
const resultEle = document.getElementById("result");

countBtn.addEventListener("click", () => {
  // Read the value of the datetime-local input
  let dateValue = inputEle.value;
  // Convert it to a timestamp using
  // new Date(selectedDate).getTime()

  let targetTime = new Date(dateValue).getTime();

  const timerCount = setInterval(() => {
    let now = new Date().getTime();
    let diff = targetTime - now;

    if (diff <= 0) {
      clearInterval(timerCount);
      resultEle.textContent = `Countdown finished!`;
      return;
    }

    // Convert diff from milliseconds to time units
    // Since diff is in milliseconds, divide it by 1000 to get total seconds.
    let totalSeconds = Math.floor(diff / 1000);
    // There are 86400 seconds in a day (24 × 60 × 60)
    let hours = Math.floor((totalSeconds % 86400) / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    resultEle.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
});
