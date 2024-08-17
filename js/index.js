/*!
* Start Bootstrap - Coming Soon v6.0.7 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/

// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Get the search button by its ID
    const searchButton = document.getElementById('searchEventsButton');

    // Add an event listener for the button click
    searchButton.addEventListener('click', function() {
        // Redirect to the desired page when the button is clicked
        window.location.href = 'events/events.html'; // Replace with your target URL
    });
});



