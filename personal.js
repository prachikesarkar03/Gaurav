// JavaScript for collecting personal details
let personalDetails = {};
console.log(personalDetails.firstName);
function savePersonalDetails() {
    personalDetails.firstName = document.getElementById("FnameField").value;
    document.getElementById('generatedName').textContent = FnameField;

    personalDetails.lasttName = document.getElementById("LnameField").value;
    personalDetails.dateofBirth = document.getElementById("dobField").value;
    personalDetails.email = document.getElementById("emailField").value;
    personalDetails.contactNumber = document.getElementById("noField").value;
    personalDetails.zipCode = document.getElementById("zipField").value;
    personalDetails.address = document.getElementById("addressField").value;
    personalDetails.state = document.getElementById("stateField").value;
    personalDetails.city = document.getElementById("cityField").value;
    personalDetails.country = document.getElementById("countryField").value;
    personalDetails.linkedin = document.getElementById("social2Field").value;
    personalDetails.github = document.getElementById("social1Field").value;
    personalDetails.summary = document.getElementById("summary").value;

    document.getElementById('generatedFirstName').textContent = personalDetails.firstName;


    console.log(personalDetails.firstName);
console.log(personalDetails.lasttName);
console.log(personalDetails.dateofBirth);
console.log(personalDetails.email);
console.log(personalDetails.contactNumber);
console.log(personalDetails.zipCode);
console.log(personalDetails.address);
console.log(personalDetails.state);
console.log(personalDetails.city);
console.log(personalDetails.country);
console.log(personalDetails.linkedin);
console.log(personalDetails.github);
console.log(personalDetails.summary);

    // Retrieve other personal details and save them in the personalDetails object
    // Navigate to the next page
    window.location.href = "qualification.html";
}
