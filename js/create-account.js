let save_and_continue_Btn = document.getElementById("save_continue");

function goToSaveAndContinue() {
  window.location.href = "../pages/login-page.html";
}

save_and_continue_Btn.addEventListener("click", goToSaveAndContinue);
