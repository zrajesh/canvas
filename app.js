const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// Rectangle
ctx.fillStyle = "red";
ctx.fillRect(20, 20, 150, 100);
ctx.fillStyle = "blue";
ctx.fillRect(200, 20, 150, 100);

ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.strokeRect(100, 200, 150, 100);

ctx.clearRect(47, 35, 90, 70);

ctx.fillStyle = "black"
ctx.font = "30px Arial"
ctx.fillText("Hello Canvas", 400, 50);


// Paths
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 200);
ctx.lineTo(50, 50);
ctx.fillStyle = "green";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(150, 200);
ctx.lineTo(250, 200);
ctx.lineTo(200, 50);
ctx.stroke();

// Arc (Circles)
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
ctx.beginPath();
ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);
ctx.moveTo(centerX + 100, centerY);
ctx.arc(centerX, centerY, 100, 0, Math.PI, false);
ctx.moveTo(centerX - 60, centerY - 80);
ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2, false);
ctx.moveTo(centerX + 100, centerY - 80);
ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2, false);
ctx.stroke();

// Animation
const circle = {
    x: 200,
    y: 200,
    size: 30,
    dx: 5,
    dy: 4
}

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    ctx.fillStyle = 'purple';
    ctx.fill();
}

function update() {
    drawCircle();
    // Change the position
    circle.x += circle.dx
    circle.y += circle.dy

    // Collision detection
    if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
        circle.dx *= -1;
    }
    if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
        circle.dy *= -1;
    }

    requestAnimationFrame(update)
}

update();

