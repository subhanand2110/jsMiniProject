// function signUp() {
//   location.href = "sign_up.html";
// }
let validationSuccess;
function login(event) {
  event.preventDefault();
  const userName = $("#username").val(); //retriving data
  const passWord = $("#userpsw").val();
  validationSuccess = true;
  if (userName === "") {
    $("#unameerr").text("enter the name");
    validationSuccess = false;
  } else {
    $("#unameerr").text("");
  }
  if (passWord === "") {
    $("#upswerr").text("enter the password");
    validationSuccess = false;
  } else {
    $("#upswerr").text("");
  }

  if (validationSuccess === true) {
    window.location.href = "main.html";
  }
}
