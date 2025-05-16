function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const clock = document.getElementById("clock");
  if (clock) {
    clock.textContent = "Current Time: " + timeString;
  }
}

setInterval(updateClock, 1000);
updateClock();
