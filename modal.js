function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form");

// Form Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const mail = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantityParticipation = document.getElementById("quantity");
const cityOne = document.getElementById("location1");
const cityTwo = document.getElementById("location2");
const cityThree = document.getElementById("location3");
const cityFour = document.getElementById("location4");
const cityFive = document.getElementById("location5");
const citySix = document.getElementById("location6");
const userTermsBox = document.getElementById("checkbox1");

// Alert Elements
const firstAlert = document.getElementById("firstAlert");
const lastAlert = document.getElementById("lastAlert");
const mailAlert = document.getElementById("mailAlert");
const birthdateAlert = document.getElementById("birthdateAlert");
const quantityParticipationAlert = document.getElementById(
  "quantityParticipationAlert"
);
const cityInputAlert = document.getElementById("cityInputAlert");
const userTermsAlert = document.getElementById("userTermsAlert");

const confirmationMessage = document.getElementById("confirmationMessage");
confirmationMessage.style.display = "none";

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// prevent from submitting form
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function validate() {
  let firstNameChecked;
  let lastNameChecked;
  let mailChecked;
  let birthdateChecked;
  let quantityParticipationChecked;
  let cityInputChecked;
  let userTermsChecked;

  //check name
  if (firstName.value.match(/^[a-z ,.'-]+$/i) && firstName.value.trim().length >= 2) {
    firstAlert.style.display = "none";
    firstNameChecked = true;
  } else {
    firstAlert.innerText = "Merci d'entrer un prénom valide";
    firstName.style.border = "#f00"
    firstAlert.style.display = "block";
    firstNameChecked = false;
  }

  if (lastName.value.match(/^[a-z ,.'-]+$/i) && lastName.value.trim().length >= 2) {
    lastAlert.style.display = "none";
    lastNameChecked = true;
  } else {
    lastAlert.innerText = "Merci d'entrer un nom valide";
    lastAlert.style.display= "block";
    lastNameChecked = false;
  }
  // check mail
  if (
    mail.value.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    mailAlert.style.display = "none";
    mailChecked = true;
  } else {
    mailAlert.innerText = "Merci d'entrer un mail valide";
    mailAlert.style.display = "block";
    mailChecked = false;

  }
  // check birth date
  if (
    birthdate.value.match(
      /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
    )
  ) {
    birthdateAlert.style.display = "none";
    birthdateChecked = true;
  } else {
    birthdateAlert.innerText = "Veuillez entrer une date au format DD/MM/YYYY";
    birthdateAlert.style.display = "block";
    birthdateChecked = false;
  }

  // check number of participations
  if (quantityParticipation.value.match(/^[0-9]{1,2}$/) && quantityParticipation.value.length <= 2) {
    quantityParticipationAlert.style.display = "none";
    quantityParticipationChecked = true;
  } else {
    quantityParticipationAlert.innerText =
      "Merci d'entrer un nombre valide (entre 0 et 99)";
    quantityParticipationAlert.style.display = "block";
    quantityParticipationChecked = false;
  }
  // check city where to participate
  if (
    cityOne.checked ||
    cityTwo.checked ||
    cityThree.checked ||
    cityFour.checked ||
    cityFive.checked ||
    citySix.checked
  ) {
    cityInputAlert.style.display = "none";
    cityInputChecked = true;
  } else {
    cityInputAlert.innerText = "Merci de sélectionner une ville";
    cityInputAlert.style.display = "block";
    cityInputChecked = false;
  }
  //check user terms validation
  if (userTermsBox.checked) {
    userTermsAlert.style.display = "none";
    userTermsChecked = true;
  } else {
    userTermsAlert.innerText = "Merci de valider les conditions d'utilisation";
    userTermsAlert.style.display = "block";
    userTermsChecked = false;
  }
  // check all and display form validation message
  if (
    firstNameChecked &&
    lastNameChecked &&
    mailChecked &&
    birthdateChecked &&
    quantityParticipationChecked &&
    cityInputChecked &&
    userTermsChecked
  ) {
    form.style.display = "none";
    form.reset();
    confirmationMessage.style.display = "block";
  }
}

// close modal event by clicking on close icon
const closeIcon = document.getElementsByClassName("close")[0];

closeIcon.onclick = function() {
  modalbg.style.display = "none";
  form.style.display = "block";
  confirmationMessage.style.display = "none";
}

// close modal by clicking on "fermer" button
const closeButton = document.getElementsByClassName("btn-close")[0];

closeButton.onclick = function() {
  modalbg.style.display = "none";
  form.style.display = "block";
  confirmationMessage.style.display = "none";
}
