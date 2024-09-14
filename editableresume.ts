
function generateResume(event: Event): void {
    event.preventDefault(); // Prevent form from refreshing the page

    // Grab user inputs
    const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const workExperience = (document.getElementById("workExperience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(", ");

    // Find the resume container where the resume will be generated
    const resumeContainer = document.getElementById("generated-resume");

    if (resumeContainer) {
        // Clear any previous resume content
        resumeContainer.innerHTML = "";

        // Dynamically generate resume content with editable sections
        resumeContainer.innerHTML = `
        <div class="resume-container">    
            <div class="sidebar">
                <h2>Name</h2>
                <p class="subtitle" contenteditable="true">${fullName}</p>
                <div class="contact-section">
                    <h3>Contact</h3>
                    <p contenteditable="true">${email}</p>
                    <p contenteditable="true">${phone}</p>
                </div>
                <div class="skills-section">
                    <h3>Skills</h3>
                    <p contenteditable="true">
                        ${skills}
                    </p>
                </div>
            </div>    
            
            <div class="main-content">
                <div class="work-experience-section">
                    <h3>Work Experience</h3>
                    <div id="work-content">
                        <div class="job">
                            <h6 contenteditable="true">${workExperience}</h6>
                        </div>
                    </div>
                </div>

                <div class="education-section">
                    <h3>Education</h3>
                    <div id="education-content">
                        <div class="degree">
                            <h6 contenteditable="true">${education}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        // Make editable areas reflect changes immediately when the user finishes editing
        addEditListeners();
    } else {
        console.error("Resume container not found!");
    }
}

// Function to add listeners for inline editing
function addEditListeners(): void {
    const editableElements = document.querySelectorAll("[contenteditable='true']");

    editableElements.forEach((element) => {
        element.addEventListener("blur", () => {
            console.log(`Updated content: ${element.textContent}`);
        });
    });
}

// Attach the event listener to the form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("resume-form");
    if (form) {
        form.addEventListener("submit", generateResume);
    } else {
        console.error("Form not found!");
    }
});
