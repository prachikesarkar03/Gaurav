function addNewDegree() {
    // Clone the qualification entry container
    const qualificationContainer = document.getElementById('qualification-container');
    const newDegreeContainer = qualificationContainer.cloneNode(true);

    // Remove the "Qualification" text from the cloned container
    const header = newDegreeContainer.querySelector('h3');
    if (header) {
        header.remove();
    }

    // Clear input fields in the cloned container
    const inputs = newDegreeContainer.querySelectorAll('input[type="text"], input[type="month"]');
    inputs.forEach(input => {
        input.value = ''; // Clear input value
    });

    // Clear checkbox in the cloned container
    const checkbox = newDegreeContainer.querySelector('input[type="checkbox"]');
    if (checkbox) {
        checkbox.checked = false; // Uncheck checkbox
    }

 
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.classList.add('btn', 'btn-danger', 'mt-3', 'delete-button'); // Add custom class
deleteButton.onclick = function() {
    qualificationContainer.parentNode.removeChild(newDegreeContainer);
};
newDegreeContainer.appendChild(deleteButton);

    // Append the cloned container to the document
    qualificationContainer.parentNode.appendChild(newDegreeContainer);
}
