function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function updateClock() {
  const clock = document.getElementById("clock");
  if (clock) {
    const now = new Date();
    clock.textContent = "Current Time: " + now.toLocaleTimeString();
  }
}

setInterval(updateClock, 1000);
updateClock();
