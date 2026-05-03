const text = "Automated cloud deployment using Jenkins, GitHub & AWS.";
let index = 0;

function typeText() {
    if (index < text.length) {
        document.querySelector(".typing-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 40);
    }
}
typeText();

function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

function animateCounter(id, target, speed) {
    let count = 0;
    const element = document.getElementById(id);
    const increment = Math.ceil(target / speed);

    const counter = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(counter);
        }
        element.textContent = count;
    }, 30);
}

window.onload = () => {
    animateCounter("deployCount", 120, 50);
    animateCounter("buildCount", 98, 50);
    animateCounter("uptimeCount", 99, 60);
};

function launchProject() {
    const msg = document.getElementById("message");
    msg.innerHTML = "🚀 Deployment Successful! Website is Live on AWS Cloud.";
    msg.style.animation = "fadeInUp 0.8s ease";
}