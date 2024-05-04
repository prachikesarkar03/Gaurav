// JavaScript for collecting qualification details
let profExpDetails = {};
function saveprofExpDetails() {
    profExpDetails.company_org = document.getElementById("CompanyField").value;
    profExpDetails.start = document.getElementById("startField").value;
    profExpDetails.city = document.getElementById("cityField").value;
    // profExpDetails.degree = document.getElementById("degreeField").value;
    profExpDetails.designation = document.getElementById("designationField").value;
    profExpDetails.end = document.getElementById("endField").value;
    profExpDetails.checkbox = document.getElementById("flexCheckDefault").value;
    profExpDetails.country = document.getElementById("CountryField").value;
console.log(profExpDetails.company_org);
console.log(profExpDetails.start);
console.log(profExpDetails.end);
console.log(profExpDetails.city);
console.log(profExpDetails.country);
// console.log(profExpDetails.degree);
console.log(profExpDetails.designation);
console.log(profExpDetails.checkbox);

    // Retrieve other personal details and save them in the personalDetails object
    // Navigate to the next page
    window.location.href = "skills.html";
}
