var validationSuccess;
let staffs = [];
function fdetails(event) {
  event.preventDefault();
  const id = $("#id").val();
  // console.log(`id=${id}`);
  const userName = $("#fname").val();
  const birthday = $("#fdob").val();
  const gender = $('input[name="gender"]:checked').val();
  const qualification = $("#feduq").val();
  const email = $("#fmail").val();
  const joinDate = $("#fjoindate").val();
  const experience = $("#fexperience").val();
  const contact = $("#fcontact").val();
  const address = $("#faddress").val();

  validationSuccess = true;
  if (userName === "") {
    $("#fnameerr").text("enter the name");
    validationSuccess = false;
  } else {
    $("#fnameerr").text("");
  }

  if (birthday === "") {
    $("#fdoberr").text("enter the birthday");
    validationSuccess = false;
  } else {
    $("#fdoberr").text("");
  }

  if (gender === undefined) {
    $("#fgnderr").text("Select the gender");
    validationSuccess = false;
  } else {
    $("#fgnderr").text("");
  }

  if (qualification === "") {
    $("#feduerr").text("enter the qualification");
    validationSuccess = false;
  } else {
    $("#feduerr").text("");
  }

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (email === "") {
    $("#fmailerr").text("enter the email");
    validationSuccess = false;
  } else if (!email.match(regex)) {
    $("#fmailerr").text("enter the valid mail");
    validationSuccess = false;
  } else {
    $("#fmailerr").text("");
  }

  if (joinDate === "") {
    $("#fjoindateerr").text("enter the join date");
    validationSuccess = false;
  } else {
    $("#fjoindateerr").text("");
  }

  if (experience === "") {
    $("#fexperr").text("enter the experience");
    validationSuccess = false;
  } else {
    $("#fexperr").text("");
  }

  if (contact === "") {
    $("#fconerr").text("enter the contact");
    validationSuccess = false;
  } else if (contact.length != 10) {
    $("#fconerr").text("enter the valid contact");
    validationSuccess = false;
  } else {
    $("#fconerr").text("");
  }

  if (address === "") {
    $("#fadderr").text("enter the address");
    validationSuccess = false;
  } else {
    $("#fadderr").text("");
  }
  let faculty = {
    name: userName,
    dob: birthday,
    gender: gender,
    educationalQualification: qualification,
    email: email,
    joiningDate: joinDate,
    experience: experience,
    contact: contact,
    address: address,
  };

  if (validationSuccess === true) {
    staffs.push(faculty);
    $("#myForm")[0].reset();
    if (id === "") {
      $.ajax({
        type: "POST",
        url: "https://6451ee99a2860c9ed4fdc99f.mockapi.io/faculty",
        data: faculty,
        success: "success",
      });
    } else {
      $.ajax({
        type: "PUT",
        url: "https://6451ee99a2860c9ed4fdc99f.mockapi.io/faculty/" + id,
        data: faculty,
        success: function () {
          //  location.reload()
          staffsData();
        },
      });
    }
  }
}

function staffsData() {
  $.ajax({
    type: "GET",
    url: "https://6451ee99a2860c9ed4fdc99f.mockapi.io/faculty",
    // data: faculty,
    success: function (staffs) {
      let value;
      $("#row").html("");
      for (var i = 0; i < staffs.length; i++) {
        value += `<tr>
        <td>${staffs[i].name}</td>
        <td>${staffs[i].dob}</td>
        <td>${staffs[i].gender}</td>
        <td>${staffs[i].educationalQualification}</td>
        <td>${staffs[i].experience}</td>
        <td>${staffs[i].contact}</td>
        <td> <button class="editb" onclick="editfList(${staffs[i].id})" style="padding:0 5px 0 5px;"><i class='bx bxs-edit'></i> </button></td>
        <td> <button class="deleteb" onclick="deletefList(${staffs[i].id})" style="padding:0 5px 0 5px;"><i class='bx bxs-trash'></i> </button></td>
      </tr>`;
      }
      $("#row").html(value);
    },
  });
}
function deletefList(id) {
  $.ajax({
    type: "DELETE",
    url: "https://6451ee99a2860c9ed4fdc99f.mockapi.io/faculty/" + id,
    success: function () {
      staffsData();
    },
  });
}
function editfList(id) {
  window.location.href = "staffform.html?id=" + id;
}
function loadEditForm() {
  let searchParams = new URLSearchParams(window.location.search);
  console.log(searchParams);
  let param = searchParams.get("id");
  console.log(param);
  if (param != null) {
    $.ajax({
      type: "GET",
      url: "https://6451ee99a2860c9ed4fdc99f.mockapi.io/faculty/" + param,
      success: function (staff) {
        $("#id").val(staff.id);
        $("#fname").val(staff.name);
        $("#fdob").val(staff.dob);
        if (staff.gender === "male") {
          $("#male").prop("checked", true);
        } else {
          $("#female").prop("checked", true);
        }
        $("#feduq").val(staff.educationalQualification);
        $("#fmail").val(staff.email);
        $("#fjoindate").val(staff.joiningDate);
        $("#fexperience").val(staff.experience);
        $("#fcontact").val(staff.contact);
        $("#faddress").val(staff.address);
        staffsData();
      },
    });
  }
}
// $("#flist").on("click", function () {
//   staffsData();
// });

let students = [];
function sdetails(event) {
  event.preventDefault();
  const id = $("#id1").val();
  const studentName = $("#sname").val();
  const birthday = $("#sdob").val();
  const gender = $('input[name="gender1"]:checked').val();
  const bloodGroup = $("#sbgrp").val();
  const fatherName = $("#sfname").val();
  const motherName = $("#smname").val();
  const contact = $("#scontact").val();
  const address = $("#saddress").val();

  validationSuccess = true;
  if (studentName === "") {
    $("#snameerr").text("enter the name");
    validationSuccess = false;
  } else {
    $("#snameerr").text("");
  }

  if (birthday === "") {
    $("#sdoberr").text("enter the birthday");
    validationSuccess = false;
  } else {
    $("#sdoberr").text("");
  }

  if (gender === undefined) {
    $("#sgnderr").text("Select the gender");
    validationSuccess = false;
  } else {
    $("#sgnderr").text("");
  }

  if (bloodGroup === "") {
    $("#sbgrperr").text("enter the blood group");
    validationSuccess = false;
  } else {
    $("#sbgrperr").text("");
  }

  if (fatherName === "") {
    $("#sfnameerr").text("enter the father's name");
    validationSuccess = false;
  } else {
    $("#sfnameerr").text("");
  }

  if (motherName === "") {
    $("#smnameerr").text("enter the mother's name");
    validationSuccess = false;
  } else {
    $("#smnameerr").text("");
  }

  if (contact === "") {
    $("#sconerr").text("enter the contact");
    validationSuccess = false;
  } else if (contact.length != 10) {
    $("#sconerr").text("enter the valid contact");
    validationSuccess = false;
  } else {
    $("#sconerr").text("");
  }

  if (address === "") {
    $("#sadderr").text("enter the address");
    validationSuccess = false;
  } else {
    $("#sadderr").text("");
  }
  // if (validationSuccess === true) {
  //   window.location.reload();
  // }
  let student = {
    studentName: studentName,
    dob: birthday,
    gender: gender,
    bloodGroup: bloodGroup,
    fatherName: fatherName,
    motherName: motherName,
    contact: contact,
    address: address,
  };

  if (validationSuccess === true) {
    students.push(student);
    $("#myForm2")[0].reset();
    if (id === "") {
      $.ajax({
        type: "POST",
        url: "https://6451ee99a2860c9ed4fdc99f.mockapi.io/student",
        data: student,
        success: "success",
      });
    } else {
      $.ajax({
        type: "PUT",
        url: "https://6451ee99a2860c9ed4fdc99f.mockapi.io/student/" + id,
        data: student,
        success: function () {
          // console.log(response)
          //  location.reload()
          studentsData();
        },
      });
    }
  }
}

function studentsData() {
  $.ajax({
    type: "GET",
    url: "https://6451ee99a2860c9ed4fdc99f.mockapi.io/student",
    // data: student,
    success: function (students) {
      let value1;
      $("#row1").html("");
      for (var i = 0; i < students.length; i++) {
        value1 += `<tr>
        <td>${students[i].studentName}</td>
        <td>${students[i].dob}</td>
        <td>${students[i].gender}</td>
        <td>${students[i].bloodGroup}</td>
        <td>${students[i].contact}</td>
        <td>${students[i].address}</td>
        <td> <button class="editbtn" onclick="editsList(${students[i].id})" style="padding:0 5px 0 5px;"><i class='bx bxs-edit'></i> </button></td>
        <td> <button class="deletebtn" onclick="deletesList(${students[i].id})" style="padding:0 5px 0 5px;"><i class='bx bxs-trash'></i></button></td>
      </tr>`;
      }
      console.log(value1);
      $("#row1").html(value1);
    },
  });
}
function deletesList(id) {
  $.ajax({
    type: "DELETE",
    url: "https://6451ee99a2860c9ed4fdc99f.mockapi.io/student/" + id,
    success: function () {
      studentsData();
    },
  });
}
function editsList(id) {
  window.location.href = "studentform.html?id=" + id;
}
function loadEditSForm() {
  let studentSearchParams = new URLSearchParams(window.location.search);
  console.log(studentSearchParams);
  let Studentparam = studentSearchParams.get("id");
  console.log(Studentparam);
  if (Studentparam != null) {
    $.ajax({
      type: "GET",
      url: "https://6451ee99a2860c9ed4fdc99f.mockapi.io/student/" + Studentparam,
      success: function (student) {
        $("#id1").val(student.id);
        $("#sname").val(student.studentName);
        $("#sdob").val(student.dob);
        if (student.gender === "male") {
          $("#male1").prop("checked", true);
        } else {
          $("#female1").prop("checked", true);
        }
        $("#sbgrp").val(student.bloodGroup);
        $("#sfname").val(student.fatherName);
        $("#smname").val(student.motherName);
        $("#scontact").val(student.contact);
        $("#saddress").val(student.address);
        studentsData();
      },
    });
  }
}

// $("#slist").on("click", function () {
//   studentsData();
// });

// function backgroundImage() {
//   document.body.style.backgroundImage = "url('images/bgmain.jpg')";
// }

// $("#facultyForm").hide();
// $("#facultyList").hide();
// $("#studentForm").hide();
// $("#studentList").hide();

// function showfList() {
//   $("#facultyList").show();
//   $("#facultyForm").hide();
//   $("#studentList").hide();
//   $("#studentForm").hide();
//   $("#backImage").hide();
// }
// function showfForm() {
//   $("#facultyForm").show();
//   $("#facultyList").hide();
//   $("#studentForm").hide();
//   $("#studentList").hide();
//   $("#backImage").hide();
// }
// function showsList() {
//   $("#studentList").show();
//   $("#studentForm").hide();
//   $("#facultyForm").hide();
//   $("#facultyList").hide();
//   $("#backImage").hide();
// }
// function showsForm() {
//   $("#studentForm").show();
//   $("#studentList").hide();
//   $("#facultyForm").hide();
//   $("#facultyList").hide();
//   $("#backImage").hide();
// }
// function backgroundImage() {
//   $("#backImage").show();
//   $("#studentForm").hide();
//   $("#studentList").hide();
//   $("#facultyForm").hide();
//   $("#facultyList").hide();
// }

//  ,gender,educationalQualification,email,joiningDate,experience,contact,address

//edit
//<td> <button class="editb" onclick="editfList(\`${staffs[i].id}\`,\`${staffs[i].name}\`,\`${staffs[i].dob}\`,\`${staffs[i].gender}\`,\`${staffs[i].educationalQualification}\`,\`${staffs[i].email}\`,\`${staffs[i].joiningDate}\`,\`${staffs[i].experience}\`,\`${staffs[i].contact}\`,\`${staffs[i].address}\`)" style="padding:0 5px 0 5px;"><i class='bx bxs-edit'></i> </button></td>
