const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// import all the fields from the form.
// eg.
const name = document.getElementById("name");
const tel = document.getElementById("tel");

function handleSubmit(e) {
  e.preventDefault();
  // //   here get the values from the form and set it to the resume

  // form name, email, phone, github, linkedin


    var name = document.getElementById("name").value;
    document.getElementById("name_resume").innerHTML = name;

    var email = document.getElementById("email").value;
    document.getElementById("email_id").innerHTML = email;

    var tel = document.getElementById("tel").value;
    document.getElementById("phone_num").innerHTML = tel;

    var github = document.getElementById("github").value;
    document.getElementById("git_hub").innerHTML = github

    var email = document.getElementById("email").value;
    document.getElementById("email_id").innerHTML = email

    var email = document.getElementById("email").value;
    document.getElementById("email_id").innerHTML = email

    var email = document.getElementById("email").value;
    document.getElementById("email_id").innerHTML = email

    var email = document.getElementById("email").value;
    document.getElementById("email_id").innerHTML = email

    var email = document.getElementById("email").value;
    document.getElementById("email_id").innerHTML = email

    var email = document.getElementById("email").value;
    document.getElementById("email_id").innerHTML = email

    var email = document.getElementById("email").value;
    document.getElementById("email_id").innerHTML = email

    var email = document.getElementById("email").value;
    document.getElementById("email_id").innerHTML = email

    var email = document.getElementById("email").value;
    document.getElementById("email_id").innerHTML = email

    var email = document.getElementById("email").value;
    document.getElementById("email_id").innerHTML = email

    var email = document.getElementById("email").value;
    document.getElementById("email_id").innerHTML = email


    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("tel").value = '';
    document.getElementById("github").value = '';
    document.getElementById("tel").value = '';
    document.getElementById("tel").value = '';
    document.getElementById("tel").value = '';
    document.getElementById("tel").value = '';
    document.getElementById("tel").value = '';
    document.getElementById("tel").value = '';
    document.getElementById("tel").value = '';
    document.getElementById("tel").value = '';

  // //   similarly for all the other fields  
}

function handleLeft() {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const print = document.querySelector(".print");
  // write more codes here
}
function handlePrint() {
  const right = document.querySelector(".right");
  const left = document.querySelector(".left");
  const print = document.querySelector(".print");
  // write more codes here
}
