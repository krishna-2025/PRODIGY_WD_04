// Typing Text Animation
const texts = ["a Web Developer", "a Web Designer", "a Python Developer"];
let textIndex = 0;
let charIndex = 0;

function type() {
  const currentText = texts[textIndex];

  if (charIndex < currentText.length) {
    document.getElementById("typing-text").innerHTML += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  const currentText = texts[textIndex];

  if (charIndex > 0) {
    document.getElementById("typing-text").innerHTML = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 500); 
  }
}

window.onload = type;

// Theme Toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeBtn.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀️";
});

// Scroll Fade-In Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Contact Form Handling
function handleContact(event) {
  event.preventDefault();
  const response = document.getElementById("responseMsg");
  response.textContent = "Thanks for reaching out! I’ll get back to you soon.";
  response.style.color = "lightgreen";
  return false;
}
