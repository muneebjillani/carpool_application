let createBtn = document.getElementById("createBtn");
let loginBtn = document.getElementById("loginBtn");

function goToCreateAccount() {
  window.location.href = "./pages/create-account-page.html";
}

function goToLogin() {
  window.location.href = "./pages/login-page.html";
}

createBtn.addEventListener("click", goToCreateAccount);

loginBtn.addEventListener("click", goToLogin);
