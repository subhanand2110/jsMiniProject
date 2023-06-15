var validationSuccess;
function names(event) {
  event.preventDefault();
  const userName = $("#uname").val(); //retriving data
  const birthday = $("#udob").val();
  const gender = $('input[name="gender"]:checked').val();
  const email = $("#umail").val();
  const role = $("#urole").val();
  const contact = $("#ucontact").val();
  const passWord = $("#upsw1").val();
  const confirmPassWord = $("#upsw2").val();

  validationSuccess = true;
  if (userName === "") {
    $("#nameerr").text("enter the name");
    validationSuccess = false;
  } else {
    $("#nameerr").text("");
  }
  if (birthday === "") {
    $("#doberr").text("enter the birthday");
    validationSuccess = false;
  } else {
    $("#doberr").text("");
  }
  if (gender === undefined) {
    $("#gnderr").text("Select the gender");
    validationSuccess = false;
  } else {
    $("#gnderr").text("");
  }
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (email === "") {
    $("#mailerr").text("enter the email");
    validationSuccess = false;
  } else if (!email.match(regex)) {
    $("#mailerr").text("enter the valid mail");
    validationSuccess = false;
  } else {
    $("#mailerr").text("");
  }

  if (role === "" || role === null) {
    $("#roleerr").text("select the role");
    validationSuccess = false;
  } else {
    $("#roleerr").text("");
  }

  if (contact === "") {
    $("#conerr").text("enter the contact");
    validationSuccess = false;
  } else if (contact.length != 10) {
    $("#conerr").text("enter the valid contact");
    validationSuccess = false;
  } else {
    $("#conerr").text("");
  }

  if (passWord === "") {
    $("#pswerr").text("enter the password");
    validationSuccess = false;
  } else {
    $("#pswerr").text("");
  }
  if (confirmPassWord === "") {
    $("#pswerr2").text("enter the password");
    validationSuccess = false;
  } else if (confirmPassWord !== passWord) {
    $("#pswerr2").text("password doesnot match");
    validationSuccess = false;
  } else {
    $("#pswerr2").text("");
  }
  if (validationSuccess === true) {
    window.location.href = "index.html";
  }
}
