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

document.getElementById("footnote").innerHTML = "COPYRIGHT " + new Date().getFullYear() + " © Information Technology Office";
