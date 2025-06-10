// Select the clover element
const clover = document.querySelector('.clover');

// Initial clover position (center of screen)
const container = document.querySelector('.dp-animation__content');
const containerRect = container.getBoundingClientRect();
let cloverX = containerRect.left + containerRect.width / 2;
let cloverY = containerRect.top + containerRect.height / 2;

// Target position (cursor location with offset)
let targetX = cloverX;
let targetY = cloverY;

// Previous mouse position for direction calculation
let lastMouseX = cloverX;
let lastMouseY = cloverY;

// How fast the clover follows the target (0 < speed < 1)
const speed = 0.15;

// Distance of offset behind the cursor
const offsetDistance = 10;

// Track if it's the first mouse move
let firstMove = true;

// Animation loop: smoothly move clover toward target
function animate() {
    cloverX += (targetX - cloverX) * speed;
    cloverY += (targetY - cloverY) * speed;

    clover.style.transform = `translate(-50%, -50%) translate(${cloverX}px, ${cloverY}px)`;

    requestAnimationFrame(animate);
}

// Update target position on mouse move
window.addEventListener('mousemove', (e) => {
    clover.style.opacity = 1; // Ensure clover is visible
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if (firstMove) {
        cloverX = mouseX;
        cloverY = mouseY;
        firstMove = false;
    }

    // Calculate movement direction
    const dx = mouseX - lastMouseX;
    const dy = mouseY - lastMouseY;
    const length = Math.sqrt(dx * dx + dy * dy) || 1;

    // Normalize and apply offset behind direction
    const offsetX = -dx / length * offsetDistance;
    const offsetY = -dy / length * offsetDistance;

    targetX = mouseX + offsetX;
    targetY = mouseY + offsetY;

    lastMouseX = mouseX;
    lastMouseY = mouseY;
});

// Start animation
animate();