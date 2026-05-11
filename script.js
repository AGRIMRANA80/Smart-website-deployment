const text =
    "Automating website deployment using GitHub, Jenkins, AWS EC2 and Nginx.";

let index = 0;

function typeText() {
    const element = document.querySelector(".typing-text");
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 35);
    }
}

function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent =
        now.toLocaleDateString() + " | " + now.toLocaleTimeString();
}

function updateLastDeployment() {
    const now = new Date();
    document.getElementById("lastUpdated").textContent =
        now.toLocaleDateString();
}

function launchProject() {
    const message = document.getElementById("message");
    message.innerHTML =
        "🚀 Deployment Successful! Website is Live on AWS EC2 and Automatically Managed by Jenkins.";
}

const logs = [
    "> git push origin main",
    "> Jenkins webhook triggered",
    "> Cloning repository...",
    "> Pulling latest source code...",
    "> Copying files to /var/www/html",
    "> Restarting Nginx service...",
    "> Deployment completed successfully.",
    "> Live website updated on AWS EC2"
];

function typeLogs() {
    const terminal = document.getElementById("terminalLog");
    let line = 0;

    function addLine() {
        if (line < logs.length) {
            terminal.textContent += logs[line] + "\n";
            line++;
            setTimeout(addLine, 600);
        }
    }

    addLine();
}

window.onload = () => {
    typeText();
    updateClock();
    updateLastDeployment();
    typeLogs();
    setInterval(updateClock, 1000);
};