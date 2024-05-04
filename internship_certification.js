// JavaScript for collecting skills/languages details
let informationDetails = {};
// console.log("Save Information Details button clicked");

function saveinformationDetails() {
    informationDetails.course = document.getElementById("courseField").value;
    informationDetails.institute = document.getElementById("instituteField").value;
    informationDetails.start1 = document.getElementById("start1Field").value;
    informationDetails.end1 = document.getElementById("end1Field").value;
    informationDetails.start2 = document.getElementById("start2Field").value;
    informationDetails.end2 = document.getElementById("end2Field").value;
    informationDetails.company_org = document.getElementById("companyField").value;
    informationDetails.location = document.getElementById("locationField").value;


console.log(informationDetails.course);
console.log(informationDetails.institute);
console.log(informationDetails.start1);
console.log(informationDetails.end1);
console.log(informationDetails.start2);
console.log(informationDetails.end2);
console.log(informationDetails.company_org);
console.log(informationDetails.location);

    // Retrieve other personal details and save them in the personalDetails object
    // Navigate to the next page
    window.location.href = "temp1.html";
}
