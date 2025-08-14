// Sparkles
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = window.innerHeight + 'px';
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 5000);
}
setInterval(createSparkle, 200);

// Scroll reveal animation
const revealElements = document.querySelectorAll('.card, .hero h2, .hero p');

window.addEventListener('scroll', () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
            el.style.transition = '0.6s ease';
        }
    });
});

revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
});
