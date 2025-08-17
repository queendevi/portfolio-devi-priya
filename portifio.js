// portifo.js

// ========== Navbar Hamburger & Dropdown ==========
const hamburger = document.querySelector(".hamburg");
const cancel = document.querySelector(".cancel");
const dropdown = document.querySelector(".dropdown");

hamburger.addEventListener("click", () => {
  dropdown.classList.add("active");
});

cancel.addEventListener("click", () => {
  dropdown.classList.remove("active");
});

// Close dropdown if user clicks outside
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target) && !hamburger.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

// ========== Typewriter Effect ==========
const typewriter = document.querySelector(".typewrite");
const text = "I'm a Developer";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typewriter.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      typewriter.textContent = "";
      index = 0;
      typeEffect();
    }, 1500);
  }
}
typeEffect();

// ========== Download CV ==========
const downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", () => {
  // Replace with your actual CV file path
  const cvPath = "DeviPriya_CV.pdf";
  const link = document.createElement("a");
  link.href = cvPath;
  link.download = "DeviPriya_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
