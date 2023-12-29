//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    // Find the elements by their IDs
    const statusElement = document.getElementById('status');
    const enterBtn = document.getElementById('enterBtn');

    // Add a click event listener to the button
    enterBtn.addEventListener('click', function () {
        // Change the text content of the status element
        statusElement.textContent = 'Entered Metaverse';

        // Optionally, create and append an h1 element
        const h1Element = document.createElement('h1');
        h1Element.textContent = 'Entered Metaverse';
        document.body.appendChild(h1Element);
    });
});
