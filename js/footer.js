function createFooter() {
    const footerContent = `This page was last modified: ${date_lastmodified()}`;
  
    // Create a new div element to hold the footer content
    const footerDiv = document.createElement('div');
    footerDiv.innerHTML = footerContent;
  
    // Append the footer to the body or a specific container
    document.body.appendChild(footerDiv);
  }
  
  // Call the function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', createFooter);  