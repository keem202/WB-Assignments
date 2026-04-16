// Welcome message
window.onload = function () {

    const welcome = document.getElementById("welcomeMessage");

    welcome.style.display = "block";

    setTimeout(() => {
        welcome.style.opacity = "0";
    }, 3000);

};

// Dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Toggle skills
function toggleSkills() {

    const skills = document.getElementById("skillsList");

    skills.style.display =
        skills.style.display === "none" ? "block" : "none";
}

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formMessage = document.getElementById("formMessage");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === "" || email === "" || message === ""){
        formMessage.style.color = "red";
        formMessage.innerText = "Please fill in all fields.";
        return;
    }

    if(!emailPattern.test(email)){
        formMessage.style.color = "red";
        formMessage.innerText = "Invalid email.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.innerText = "Message sent!";
});


// 🔥 GitHub API Integration
async function loadGitHubProjects() {

    const container = document.getElementById("githubProjects");

    try {

        const response = await fetch("https://api.github.com/users/keem202/repos");

        if (!response.ok) {
            throw new Error("API error");
        }

        const repos = await response.json();

        container.innerHTML = "";

        repos.slice(0, 5).forEach(repo => {

            const div = document.createElement("div");
            div.classList.add("project");

            div.innerHTML = `
                <h4>${repo.name}</h4>
                <p>${repo.description || "No description available."}</p>
                <p><strong>Language:</strong> ${repo.language || "N/A"}</p>
                <p><strong>⭐ Stars:</strong> ${repo.stargazers_count}</p>
                <a href="${repo.html_url}" target="_blank">View Project</a>
            `;

            container.appendChild(div);
        });

    } catch (error) {

        container.innerHTML = "<p style='color:red;'>Failed to load projects.</p>";
        console.error(error);

    }
}

loadGitHubProjects();