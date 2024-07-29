var dateEnd = new Date('2024-09-01 00:00:00');
var dateNow = new Date();
var totalSeconds = Math.floor((dateEnd - dateNow) / 1000);

function countdown() {
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  document.querySelector('.days p').innerHTML = days;
  document.querySelector('.hours p').innerHTML = hours;
  document.querySelector('.minutes p').innerHTML = minutes;
  document.querySelector('.seconds p').innerHTML = seconds;

  totalSeconds--;
  if (totalSeconds >= 0) {
    setTimeout(countdown, 1000);
  }
}

countdown();
