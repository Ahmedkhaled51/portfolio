// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navItems = document.querySelector(".nav-items");

menuBtn.addEventListener("click", () => {
  navItems.classList.toggle("active");
  const icon = menuBtn.querySelector("i");
  if (icon.classList.contains("bx-menu")) {
    icon.classList.replace("bx-menu", "bx-x");
  } else {
    icon.classList.replace("bx-x", "bx-menu");
  }
});

const roles = ["Data Analyst", "Data Scientist"];
let currentRole = 0;
let currentChar = 0;
let isTyping = true;
const roleText = document.querySelector(".role-text");

function typeText() {
  const role = roles[currentRole];
  if (isTyping) {
    if (currentChar <= role.length) {
      roleText.textContent = role.substring(0, currentChar);
      currentChar++;
      setTimeout(typeText, 100);
    } else {
      isTyping = false;
      setTimeout(typeText, 1000);
    }
  } else {
    if (currentChar >= 0) {
      roleText.textContent = role.substring(0, currentChar);
      currentChar--;
      setTimeout(typeText, 50);
    } else {
      currentRole = (currentRole + 1) % roles.length;
      isTyping = true;
      setTimeout(typeText, 100);
    }
  }
}

// Start the typing animation
typeText();





function deleteRole() {
  // Remove the last character from the text
  const currentRole = roles[currentRoleIndex];
  roleText.textContent = currentRole.slice(0, currentCharIndex - 1);
  currentCharIndex--;
  
  // If the role is fully deleted, move to the next role
  if (currentCharIndex === 0) {
    currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Loop to the next role
    setTimeout(typeRole, 500); // Pause briefly before typing the next role
  } else {
    setTimeout(deleteRole, 50); // Adjust delete speed here (lower is faster)
  }
}

// Start the typing effect
typeRole();


// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


function doPost(e) {
  // Get the form data
  const name = e.parameter.name;
  const email = e.parameter.email;
  const message = e.parameter.message;

  // Get the active sheet
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Append data to the sheet
  sheet.appendRow([name, email, message]);

  // Return success response
  return ContentService.createTextOutput("Success!");
}




