// Welcome message when page loads
window.onload = function () {

    const welcome = document.getElementById("welcomeMessage");

    welcome.style.display = "block";

    setTimeout(() => {
        welcome.style.opacity = "0";
    }, 3000);

};



// Dark mode toggle
function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

}



// Show / Hide skills
function toggleSkills() {

    const skills = document.getElementById("skillsList");

    if (skills.style.display === "none") {
        skills.style.display = "block";
    } else {
        skills.style.display = "none";
    }

}



// Contact form validation
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
        formMessage.innerText = "Please enter a valid email.";

        return;

    }

    formMessage.style.color = "green";
    formMessage.innerText = "Message sent successfully!";

});