// JavaScript for collecting qualification details
let qualificationDetails = {};
function savequalificationDetails() {
    qualificationDetails.school_college = document.getElementById("schField").value;
    qualificationDetails.start = document.getElementById("startField").value;
    qualificationDetails.city = document.getElementById("cityField").value;
    qualificationDetails.degree = document.getElementById("degreeField").value;
    qualificationDetails.field_of_study = document.getElementById("fieldofstudyField").value;
    qualificationDetails.end = document.getElementById("endField").value;
    qualificationDetails.checkbox = document.getElementById("flexCheckDefault").value;
    qualificationDetails.country = document.getElementById("countryField").value;
  console.log(qualificationDetails.school_college);
console.log(qualificationDetails.start);
console.log(qualificationDetails.end);
console.log(qualificationDetails.city);
console.log(qualificationDetails.country);
console.log(qualificationDetails.degree);
console.log(qualificationDetails.field_of_study);
console.log(qualificationDetails.checkbox);

    // Retrieve other personal details and save them in the personalDetails object
    // Navigate to the next page
    window.location.href = "prof_exp.html";
}
