// Ensure the DOM is fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', () => {
  // Get references to the DOM elements
  const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
  const skillsSection = document.getElementById('skills-section') as HTMLDivElement;

  // Ensure the elements exist before adding event listeners
  if (toggleButton && skillsSection) {
      toggleButton.addEventListener('click', () => {
          // Toggle the display of the skills section
          if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
              skillsSection.style.display = 'block';
              toggleButton.textContent = 'Hide Skills';
          } else {
              skillsSection.style.display = 'none';
              toggleButton.textContent = 'Show Skills';
          }
      });
  } else {
      console.error('Toggle button or skills section not found.');
  }
});
