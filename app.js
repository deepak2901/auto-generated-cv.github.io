const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// import all the fields from the form.
// eg.
const name = document.getElementById("name");
const tel = document.getElementById("tel");
const github = document.getElementById("github");
const linkedin = document.getElementById("linkedin");
const degree = document.getElementById("degree");
const college = document.getElementById("college");
const startingYear = document.getElementById("startingYear");
const passingYear = document.getElementById("passingYear");
const cgpa = document.getElementById("cgpa");
const skills = document.getElementById("skills");
const project = document.getElementById("project");
const pdescription = document.getElementById("pDescription");
const plink = document.getElementById("plink");
const ecompany = document.getElementById("ecompany");
const expDesignation = document.getElementById("expDesignation");
const expDuration = document.getElementById("expDuration");
const expDescription = document.getElementById("expDescription");

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

    var linkedin = document.getElementById("linkedin").value;
    document.getElementById("linked_in").innerHTML = linkedin

    var degree = document.getElementById("degree").value;
    document.getElementById("degree_").innerHTML = degree

    var college = document.getElementById("college").value;
    document.getElementById("college_").innerHTML = college

    var startingYear = document.getElementById("startingYear").value;
    document.getElementById("starting_year").innerHTML = startingYear

    var passingYear = document.getElementById("passingYear").value;
    document.getElementById("passing_year").innerHTML = passingYear

    var cgpa = document.getElementById("cgpa").value;
    document.getElementById("cgpa_").innerHTML = cgpa

    var skills = document.getElementById("skills").value;
    document.getElementById("skills_").innerHTML = skills

    var project = document.getElementById("project").value;
    document.getElementById("project_").innerHTML = project

    var pDescription = document.getElementById("pDescription").value;
    document.getElementById("pdescription_").innerHTML = pDescription

    var plink = document.getElementById("plink").value;
    document.getElementById("link_").innerHTML = plink

    var ecompany = document.getElementById("ecompany").value;
    document.getElementById("ecompany_").innerHTML = ecompany

    var expDesignation = document.getElementById("expDesignation").value;
    document.getElementById("exp_designation").innerHTML = expDesignation

    var expDuration = document.getElementById("expDuration").value;
    document.getElementById("exp_duration").innerHTML = expDuration

    var expDescription = document.getElementById("expDescription").value;
    document.getElementById("exp_description").innerHTML = expDescription


    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("tel").value = '';
    document.getElementById("github").value = '';
    document.getElementById("linkedin").value = '';
    document.getElementById("degree").value = '';
    document.getElementById("college").value = ''; 
    document.getElementById("startingYear").value = '';
    document.getElementById("passingYear").value = '';
    document.getElementById("cgpa").value = '';
    document.getElementById("skills").value = '';
    document.getElementById("project").value = '';
    document.getElementById("pDescription").value = '';
    document.getElementById("plink").value = '';
    document.getElementById("ecompany").value = '';
    document.getElementById("expDesignation").value = '';
    document.getElementById("expDuration").value = '';
    document.getElementById("expDescription").value = '';
    
}

function handleLeft() {
  const left = document.querySelector(".left");
  left.style.display = "none";
  const right = document.querySelector(".right");
  right.style.width = "100%";
  const print = document.querySelector(".print");
  print.style.display = "block";
  // write more codes here
}
function handlePrint() {
  const right = document.querySelector(".right");
  right.style.width = "60%";
  const left = document.querySelector(".left");
  left.style.display = "none";
  const print = document.querySelector(".print");
  print.style.display = "none";
  // write more codes here
}
