// JavaScript for collecting skills/languages details
let skillsDetails = {};
function saveskillsDetails() {
    skillsDetails.skills = document.getElementById("skillField").value;
    skillsDetails.language = document.getElementById("languageField").value;
console.log(skillsDetails.skills);
console.log(skillsDetails.language);

    // Retrieve other personal details and save them in the personalDetails object
    // Navigate to the next page
    window.location.href = "internship_certification.html";
}
