// Create the canvas
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array to store particles
var particles = [];

// Define the Particle class
function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.size = Math.random() * 5 + 1;
  this.speedX = Math.random() * 2 - 1.5;
  this.speedY = Math.random() * 2 - 1.5;
}

// Create particles
for (var i = 0; i < 150; i++) {
  particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
}

// Function to animate particles
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    ctx.beginPath();
    ctx.fillStyle = 'orange';
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x > canvas.width) p.x = 0;
    if (p.y > canvas.height) p.y = 0;
    if (p.x < 0) p.x = canvas.width;
    if (p.y < 0) p.y = canvas.height;
  }
  requestAnimationFrame(animateParticles);
}

// Start the animation
animateParticles();
