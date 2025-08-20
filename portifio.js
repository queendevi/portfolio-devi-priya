const hamburger = document.querySelector('.hamburg');
const cancel = document.querySelector('.cancel');
const dropdown = document.querySelector('.dropdown');


function openMenu() {
dropdown.classList.add('active');
dropdown.setAttribute('aria-hidden', 'false');
document.body.style.overflow = 'hidden';
}
function closeMenu() {
dropdown.classList.remove('active');
dropdown.setAttribute('aria-hidden', 'true');
document.body.style.overflow = '';
}


hamburger.addEventListener('click', openMenu);
hamburger.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') openMenu(); });
cancel.addEventListener('click', closeMenu);
cancel.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') closeMenu(); });


// Close if clicking outside menu area
document.addEventListener('click', (e) => {
const clickedInsideMenu = dropdown.contains(e.target) || hamburger.contains(e.target);
if (!clickedInsideMenu) closeMenu();
});


// ====== TYPEWRITER EFFECT ======
const typewriter = document.querySelector('.typewrite');
const texts = ["I'm a Developer", "QA Enthusiast", "React Learner"]; // rotate a few roles
let textIndex = 0; let charIndex = 0; let typing = true;


function typeLoop() {
const current = texts[textIndex];
if (typing) {
if (charIndex <= current.length) {
typewriter.textContent = current.slice(0, charIndex++);
setTimeout(typeLoop, 90);
} else {
typing = false; setTimeout(typeLoop, 1200);
}
} else {
if (charIndex >= 0) {
typewriter.textContent = current.slice(0, charIndex--);
setTimeout(typeLoop, 40);
} else {
typing = true; textIndex = (textIndex + 1) % texts.length; setTimeout(typeLoop, 300);
}
}
}
typeLoop();


// ====== DOWNLOAD CV ======
document.getElementById('downloadCV').addEventListener('click', () => {
const cvPath = 'DeviPriya_CV.pdf'; // put your real file name in the same folder
const link = document.createElement('a');
link.href = cvPath;
link.download = 'DeviPriya_CV.pdf';
document.body.appendChild(link);
link.click();
link.remove();
});
