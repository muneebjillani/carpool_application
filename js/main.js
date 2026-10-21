let createBtn = document.getElementById("createBtn");
let loginBtn = document.getElementById("loginBtn");

function goToCreateAccount() {
  window.location.href = "create-account.html";
}

function goToLogin() {
  window.location.href = "login.html";
}

createBtn.addEventListener("click", goToCreateAccount);

loginBtn.addEventListener("click", goToLogin);
