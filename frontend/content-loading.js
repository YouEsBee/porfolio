function loadNavBar() {
    fetch("./src/components/navbar.html").then(response => response.text()).then(data => {
        document.getElementById("nav-bar").innerHTML = data;
    });
    fetch("./src/pages/portfolio.html").then(response => response.text()).then(data => {
        document.getElementById("portfolio-content").innerHTML = data;
    });
    fetch("./src/pages/about.html").then(response => response.text()).then(data => {
        document.getElementById("about-content").innerHTML = data;
    });
    fetch("./src/pages/projects.html").then(response => response.text()).then(data => {
        document.getElementById("projects-content").innerHTML = data;
    });
    fetch("./src/pages/post.html").then(response => response.text()).then(data => {
        document.getElementById("post-content").innerHTML = data;
    });
}

function showPortfolio() {
    document.getElementById("portfolio-content").style.display = "block";
    document.getElementById("about-content").style.display = "none";
    document.getElementById("projects-content").style.display = "none";
    document.getElementById("post-content").style.display = "none";
}

function showAbout() {
    document.getElementById("portfolio-content").style.display = "none";
    document.getElementById("about-content").style.display = "block";
    document.getElementById("projects-content").style.display = "none";
    document.getElementById("post-content").style.display = "none";
}

function showProjects() {
    document.getElementById("portfolio-content").style.display = "none";
    document.getElementById("about-content").style.display = "none";
    document.getElementById("projects-content").style.display = "block";
    document.getElementById("post-content").style.display = "none";
}

function showPost() {
    document.getElementById("portfolio-content").style.display = "none";
    document.getElementById("about-content").style.display = "none";
    document.getElementById("projects-content").style.display = "none";
    document.getElementById("post-content").style.display = "block";
}

document.addEventListener("DOMContentLoaded", loadNavBar);