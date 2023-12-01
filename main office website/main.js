function trackPackage() {
    const trackingNumber = document.getElementById('trackingNumber').value;
    const trackingResult = document.getElementById('trackingResult');

    // You can implement your tracking logic here
    // For this example, just displaying a message
    trackingResult.innerText = `Tracking ${trackingNumber}: In Transit`;
}
document.getElementById('logoutBtn').addEventListener('click', function() {
    // Perform logout actions here, such as clearing session/local storage or redirecting to logout endpoint
    // For example, if using JavaScript and local storage:
    localStorage.clear(); // Clear all items from local storage
    window.location.href = 'logout.php'; // Redirect to the logout endpoint or login page
  });
  