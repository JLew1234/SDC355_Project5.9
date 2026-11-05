/**
 * Author: Jonathan M. Lewellen
 * Student ID: jonlew0997
 * Purpose: Project 5.9 - Custom Objects, Session Storage, Dynamic DOM Rendering, and UI Interactivity.
 */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. CUSTOM PROJECT OBJECTS & ARRAY
    // ==========================================
    const defaultProjects = [
        {
            title: "NurturePath Lactation Services",
            summary: "A hybrid e-commerce and appointment booking storefront website built to support families with professional care.",
            imageUrl: "Images/mom_baby.png",
            repoLink: "https://github.com/JLew1234/SDC260_Storefront-Website.git"
        },
        {
            title: "Molten Dreams Glassworks",
            summary: "An interactive artisan glass store featuring local storage cart persistence, stock validation, and checkout timers.",
            imageUrl: "Images/suncatcher.png",
            repoLink: "https://github.com/JLew1234/SDC260_GlassWorks.git"
        },
        {
            title: "Web Developer Portfolio",
            summary: "An interactive portfolio showcasing dynamic DOM manipulation, persistent themes, and scalable object rendering.",
            imageUrl: "Images/vase.png",
            repoLink: "https://github.com/JLew1234/jlew1234.github.io"
        }
    ];

    // ==========================================
    // 2. STORE AND PARSE INFORMATION USING SESSIONSTORAGE
    // ==========================================
    const STORAGE_KEY = "portfolioProjectsData";

    // On page load, check if data exists in session storage
    if (!sessionStorage.getItem(STORAGE_KEY)) {
        // If no data exists, convert array to string and store using sessionStorage.setItem()
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
    }

    // Retrieve and parse data using JSON.parse()
    const storedProjects = JSON.parse(sessionStorage.getItem(STORAGE_KEY));

    // ==========================================
    // 3. RENDER PROJECTS DYNAMICALLY (DOM SELECTORS & LOOPS)
    // ==========================================
    const projectsContainer = document.getElementById("projects-container");
    
    if (projectsContainer) {
        projectsContainer.innerHTML = ""; // Clear existing static content

        // Loop through the project array and dynamically create elements
        storedProjects.forEach(project => {
            const card = document.createElement("article");
            card.className = "project-card";

            const h3 = document.createElement("h3");
            h3.textContent = project.title;

            const a = document.createElement("a");
            a.href = project.repoLink;
            a.target = "_blank";
            a.setAttribute("aria-label", `View repository for ${project.title}`);

            const img = document.createElement("img");
            img.src = project.imageUrl;
            img.alt = `${project.title} Preview Image`;
            a.appendChild(img);

            const p = document.createElement("p");
            p.textContent = project.summary;

            card.appendChild(h3);
            card.appendChild(a);
            card.appendChild(p);
            projectsContainer.appendChild(card);
        });
    }

    // ==========================================
    // 4. DYNAMIC SKILLS LIST LOOP (AT LEAST 5 ITEMS)
    // ==========================================
    const skillsArray = ["HTML5", "CSS3", "JavaScript", "Git & GitHub", "Responsive Design"];
    const skillsListElement = document.getElementById("skills-list");
    
    if (skillsListElement) {
        skillsListElement.innerHTML = "";
        skillsArray.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            skillsListElement.appendChild(li);
        });
    }

    // ==========================================
    // 5. PERSISTENT DARK MODE PREFERENCE (LOCALSTORAGE)
    // ==========================================
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    
    // Check localStorage on initial page load
    if (localStorage.getItem("darkModePreference") === "enabled") {
        document.body.classList.add("dark-mode");
        if (darkModeToggle) darkModeToggle.checked = true;
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("change", function() {
            if (darkModeToggle.checked) {
                document.body.classList.add("dark-mode");
                localStorage.setItem("darkModePreference", "enabled");
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("darkModePreference", "disabled");
            }
        });
    }

    // ==========================================
    // 7. CONTACT FORM SUBMISSION FEEDBACK TIMER
    // ==========================================
    const contactForm = document.getElementById("contact-form");
    const submitButton = document.getElementById("submit-btn");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let inputName = document.getElementById("name").value.trim() || "Guest";
            
            let statusMessage = document.getElementById("form-status-message");
            if (!statusMessage) {
                statusMessage = document.createElement("p");
                statusMessage.id = "form-status-message";
                statusMessage.style.marginTop = "15px";
                statusMessage.style.fontWeight = "bold";
                contactForm.appendChild(statusMessage);
            }

            statusMessage.textContent = "Sending message...";
            statusMessage.style.color = "#ff7518";
            submitButton.disabled = true;

            setTimeout(() => {
                statusMessage.textContent = `Thank you, ${inputName}, your message has been sent successfully!`;
                statusMessage.style.color = "#22c55e";
                submitButton.disabled = false;
                contactForm.reset();
            }, 2500);
        });
    }
});

    // Close modal when the "Close" button is clicked
    if (modalCloseBtn && modalOverlay) {
        modalCloseBtn.addEventListener("click", function() {
            modalOverlay.style.display = "none";
        });
    }

    // Optional: Also allow closing the modal if the user clicks anywhere on the backdrop outside the box
    if (modalOverlay) {
        modalOverlay.addEventListener("click", function(event) {
            if (event.target === modalOverlay) {
                modalOverlay.style.display = "none";
            }
        });
    }
});

    // ==========================================
    // 7. CONTACT FORM SUBMISSION FEEDBACK TIMER
    // ==========================================
    const contactForm = document.getElementById("contact-form");
    const submitButton = document.getElementById("submit-btn");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let inputName = document.getElementById("name").value.trim() || "Guest";
            
            let statusMessage = document.getElementById("form-status-message");
            if (!statusMessage) {
                statusMessage = document.createElement("p");
                statusMessage.id = "form-status-message";
                statusMessage.style.marginTop = "15px";
                statusMessage.style.fontWeight = "bold";
                contactForm.appendChild(statusMessage);
            }

            statusMessage.textContent = "Sending message...";
            statusMessage.style.color = "#ff7518";
            submitButton.disabled = true;

            setTimeout(() => {
                statusMessage.textContent = `Thank you, ${inputName}, your message has been sent successfully!`;
                statusMessage.style.color = "#22c55e";
                submitButton.disabled = false;
                contactForm.reset();
            }, 2500);
        });
    }
});