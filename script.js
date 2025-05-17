// Button Click
document.getElementById("changeButton").addEventListener("click", () => {
  document.getElementById("message").textContent = "You clicked the button!";
});

// Hover Effect
const hoverBtn = document.getElementById("hoverButton");
hoverBtn.addEventListener("mouseover", () => {
  hoverBtn.style.backgroundColor = "lightblue";
});
hoverBtn.addEventListener("mouseout", () => {
  hoverBtn.style.backgroundColor = "";
});

// Keypress
document.getElementById("keyPressInput").addEventListener("keydown", (e) => {
  document.getElementById("keyMessage").textContent = `You pressed: ${e.key}`;
});

// Double Click
document.getElementById("doubleClickMessage").addEventListener("dblclick", () => {
  alert("Double-click detected!");
});

// Change Color/Text Button
const colorBtn = document.getElementById("colorChangeButton");
colorBtn.addEventListener("click", () => {
  colorBtn.style.backgroundColor = "orange";
  colorBtn.textContent = "Color changed!";
});

// Image Gallery with Online Images
const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3"
];
let currentImage = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById("galleryImage").src = images[currentImage];
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  document.getElementById("galleryImage").src = images[currentImage];
});

// Tabs
document.querySelectorAll(".tabButton").forEach(button => {
  button.addEventListener("click", function () {
    document.querySelectorAll(".tabContent").forEach(tab => {
      tab.style.display = "none";
    });
    document.getElementById(this.dataset.tab).style.display = "block";
  });
});

// Form Validation - Username
document.getElementById("myForm").addEventListener("submit", function (e) {
  if (!document.getElementById("username").value) {
    alert("Username is required!");
    e.preventDefault();
  }
});

// Form Validation - Email
document.getElementById("emailForm").addEventListener("submit", function (e) {
  const email = document.getElementById("email").value;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address!");
    e.preventDefault();
  }
});

// Form Validation - Password Length
document.getElementById("passwordForm").addEventListener("submit", function (e) {
  const password = document.getElementById("password").value;
  if (password.length < 8) {
    alert("Password must be at least 8 characters!");
    e.preventDefault();
  }
});

// Real-time Password Feedback
document.getElementById("passwordInput").addEventListener("input", function () {
  const feedback = document.getElementById("passwordFeedback");
  if (this.value.length < 8) {
    feedback.textContent = "Password is too short!";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Password is strong!";
    feedback.style.color = "green";
  }
});
