let login_Btn = document.getElementById("login-submit");

function goToLogin() {
  window.location.href = "../pages/home.html";
}

login_Btn.addEventListener("click", goToLogin);
