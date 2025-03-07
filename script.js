// Floating Sparkles Animation
const canvas = document.getElementById("sparkles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let sparkles = [];

function createSparkle() {
    let size = Math.random() * 5 + 2;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let speed = Math.random() * 2 + 1;
    
    sparkles.push({ x, y, size, speed });
}

function animateSparkles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    sparkles.forEach((sparkle, index) => {
        sparkle.y -= sparkle.speed;
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2);
        ctx.fill();
        
        if (sparkle.y < -sparkle.size) {
            sparkles.splice(index, 1);
        }
    });

    requestAnimationFrame(animateSparkles);
}

setInterval(createSparkle, 100);
animateSparkles();

// Floating Hearts Animation
const heartsCanvas = document.getElementById("floatingHearts");
const heartsCtx = heartsCanvas.getContext("2d");
heartsCanvas.width = window.innerWidth;
heartsCanvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
    let size = Math.random() * 10 + 5;
    let x = Math.random() * heartsCanvas.width;
    let y = heartsCanvas.height + size;
    let speed = Math.random() * 2 + 1;
    
    hearts.push({ x, y, size, speed });
}

function animateHearts() {
    heartsCtx.clearRect(0, 0, heartsCanvas.width, heartsCanvas.height);

    hearts.forEach((heart, index) => {
        heart.y -= heart.speed;
        heartsCtx.fillStyle = "pink";
        heartsCtx.beginPath();
        heartsCtx.arc(heart.x, heart.y, heart.size, 0, Math.PI * 2);
        heartsCtx.fill();

        if (heart.y < -heart.size) {
            hearts.splice(index, 1);
        }
    });

    requestAnimationFrame(animateHearts);
}

setInterval(createHeart, 300);
animateHearts();
