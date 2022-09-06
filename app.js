// UI ELEMENTS
const cardNumber = document.querySelector("#cdNumber");
const cardName = document.querySelector("#cdName");
const cardMonth = document.querySelector("#cdMonth");
const cardYear = document.querySelector("#cdYear");
const cvcNumber = document.querySelector("#cdCVC");

// UI SECTIONS
const inputFormSection = document.querySelector(".formInputSection");
const thankYouSection = document.querySelector(".thank-you-section");
const spinner = document.querySelector("#spinner");

// FORM INPUTS
const form = document.querySelector("form");
const formInputs = form.querySelectorAll("input");
const FormSubmitBtn = form.querySelector("button");
const continueBtn = document.querySelector("#continue");

// EVENT LISTENERS
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }
  showThankYouCard();
});

formInputs.forEach((input) =>
  input.addEventListener("input", (e) => {
    getDetails(input, e);
  })
);
continueBtn.addEventListener("click", () => {
  hideThankYouCard();
  resetFormInputs();
  resetFrontCard();
});

// FUNCTIONS
function getDetails(ele, event) {
  if (ele.getAttribute("id") === "cardName") {
    cardName.textContent = event.target.value;
  }
  if (ele.getAttribute("id") === "cardNumber") {
    if (
      event.target.value.length == 4 ||
      event.target.value.length == 9 ||
      event.target.value.length == 14
    ) {
      event.target.value = event.target.value + " ";
    }

    cardNumber.textContent = event.target.value.toUpperCase();
  }
  if (ele.getAttribute("id") === "cardExpMonth") {
    if (event.target.value.length === 1) {
      cardMonth.textContent = `0${event.target.value}`;
    } else {
      cardMonth.textContent = event.target.value;
    }
  }
  if (ele.getAttribute("id") === "cardExpYear") {
    cardYear.textContent = event.target.value.split("").splice(2).join("");
  }
  if (ele.getAttribute("id") === "cardCVC") {
    cvcNumber.textContent = event.target.value;
  }
}

function showThankYouCard() {
  spinner.classList.remove("d-none");
  setTimeout(() => {
    thankYouSection.classList.remove("d-none");
    inputFormSection.classList.add("d-none");
    spinner.classList.add("d-none");
  }, 1500);
}

function resetFrontCard() {
  cardNumber.textContent = "0000 0000 0000 0000";
  cardName.textContent = "JANE APPLESEED";
  cardMonth.textContent = "00";
  cardYear.textContent = "00";
  cvcNumber.textContent = "000";
}

function resetFormInputs() {
  form.classList.remove("was-validated");

  formInputs.forEach((input) => (input.value = ""));
}

function hideThankYouCard() {
  spinner.classList.remove("d-none");
  setTimeout(() => {
    thankYouSection.classList.add("d-none");
    inputFormSection.classList.remove("d-none");
    spinner.classList.add("d-none");
  }, 1500);
}
