  // JavaScript to toggle visibility and button text
  document.querySelector(".additional-section button").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior of button

    const announcementsBottom = document.querySelector(".announcements-bottom");
    const button = event.target; // The button that was clicked

    if (announcementsBottom.style.display === "none" || announcementsBottom.style.display === "") {
      announcementsBottom.style.display = "block"; // Show the section
      button.textContent = "See Less Announcements"; // Change button text
    } else {
      announcementsBottom.style.display = "none"; // Hide the section
      button.textContent = "See More Announcements"; // Change button text
    }
  });

  // JavaScript function to toggle the "Enlisted Courses" section
  function toggleEnlistedCourses() {
    const enlistedCourses = document.getElementById('enlistedCourses');
    if (enlistedCourses.classList.contains('hidden')) {
      enlistedCourses.classList.remove('hidden'); // Show the section
    } else {
      enlistedCourses.classList.add('hidden'); // Hide the section
    }
  }
// Select the form and input fields
const loginForm = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

// Add an event listener for form submission
loginForm.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic validation
    if (!username || !password) {
        alert("Please fill in both username and password.");
        return;
    }

    // Example credentials for demonstration (replace with backend authentication)
    const validUsername = "2024-00206";
    const validPassword = "upmin";

    if (username === validUsername && password === validPassword) {
        window.location.href = "Home.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

document.getElementById("footnote").innerHTML = "COPYRIGHT " + new Date().getFullYear() + " © Information Technology Office";
