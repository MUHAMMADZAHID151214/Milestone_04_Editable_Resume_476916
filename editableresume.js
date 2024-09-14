function generateResume(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    // Grab user inputs
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var workExperience = document.getElementById("workExperience").value;
    var skills = document.getElementById("skills").value.split(", ");
    // Find the resume container where the resume will be generated
    var resumeContainer = document.getElementById("generated-resume");
    if (resumeContainer) {
        // Clear any previous resume content
        resumeContainer.innerHTML = "";
        // Dynamically generate resume content with editable sections
        resumeContainer.innerHTML = "\n        <div class=\"resume-container\">    \n            <div class=\"sidebar\">\n                <h2>Name</h2>\n                <p class=\"subtitle\" contenteditable=\"true\">".concat(fullName, "</p>\n                <div class=\"contact-section\">\n                    <h3>Contact</h3>\n                    <p contenteditable=\"true\">").concat(email, "</p>\n                    <p contenteditable=\"true\">").concat(phone, "</p>\n                </div>\n                <div class=\"skills-section\">\n                    <h3>Skills</h3>\n                    <p contenteditable=\"true\">\n                        ").concat(skills, "\n                    </p>\n                </div>\n            </div>    \n            \n            <div class=\"main-content\">\n                <div class=\"work-experience-section\">\n                    <h3>Work Experience</h3>\n                    <div id=\"work-content\">\n                        <div class=\"job\">\n                            <h6 contenteditable=\"true\">").concat(workExperience, "</h6>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"education-section\">\n                    <h3>Education</h3>\n                    <div id=\"education-content\">\n                        <div class=\"degree\">\n                            <h6 contenteditable=\"true\">").concat(education, "</h6>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        ");
        // Make editable areas reflect changes immediately when the user finishes editing
        addEditListeners();
    }
    else {
        console.error("Resume container not found!");
    }
}
// Function to add listeners for inline editing
function addEditListeners() {
    var editableElements = document.querySelectorAll("[contenteditable='true']");
    editableElements.forEach(function (element) {
        element.addEventListener("blur", function () {
            console.log("Updated content: ".concat(element.textContent));
        });
    });
}
// Attach the event listener to the form
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    if (form) {
        form.addEventListener("submit", generateResume);
    }
    else {
        console.error("Form not found!");
    }
});
