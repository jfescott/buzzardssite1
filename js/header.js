// Create a function to generate the header content
function createHeader() {
    const headerContent = `
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact</a>
        <a href="gallery.html">Gallery</a>
        today is: ${get_today_date()}
    `;

    // Create a new div element to hold the header content
    const headerDiv = document.createElement('div');
    headerDiv.innerHTML = headerContent;

    // Append the header to the body or a specific container
    document.body.insertBefore(headerDiv, document.body.firstChild);
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createHeader);