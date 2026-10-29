let passengerBtn = document.getElementById("passengerModeBtn");
let driverBtn = document.getElementById("driverModeBtn");
let menuBtn = document.getElementById("menuBtn");

function goToPassengerPage() {
  window.location.href = "../pages/passenger.html";
}

passengerBtn.addEventListener("click", goToPassengerPage);

function goToDriverPage() {
  window.location.href = "../pages/driver.html";
}

driverBtn.addEventListener("click", goToDriverPage);
