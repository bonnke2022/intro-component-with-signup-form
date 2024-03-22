const form = document.querySelector("#form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    verifyDetails();
});
function verifyDetails() {
    firstNameValue = firstName.value.trim();
    lastNameValue = lastName.value.trim();
    emailValue = email.value.trim();
    passwordValue = password.value.trim();

    if (!firstNameValue) {
        setErrorFor(firstName, "First Name cannot be empty");
    } else {
        setSuccessFor(firstName);
    }
    if (!lastNameValue) {
        setErrorFor(lastName, "Last Name cannot be empty");
    } else {
        setSuccessFor(lastName);
    }
    if (!emailValue) {
        setErrorFor(email, "Email cannot be empty");
    }else if (!isEmail(emailValue)) {
        setErrorFor(email, "Looks like this is not an email")
    } else {
        setSuccessFor(email);
    }
    if (!passwordValue) {
        setErrorFor(password, "Password cannot be empty");
    } else {
        setSuccessFor(password);
    }
    
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector("span");

    span.innerText = message;
    formControl.className = "form-control error";
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
function isEmail(email) {
    return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
}