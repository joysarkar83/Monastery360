// Ensure this runs after the DOM has loaded
document.addEventListener("DOMContentLoaded", function () {

    // Create panorama using local image path
    const panorama = new PANOLENS.ImagePanorama("Resources/Gallery360/monastery360.jpg");

    // Disable user interactions and enable auto-rotation
    panorama.addEventListener("enter", function () {
        panorama.autoRotate = true;      // enable auto rotation
        panorama.autoRotateSpeed = 0.2;  // adjust speed
        panorama.enableControl = false;  // disable dragging/zooming
    });

    // Initialize viewer
    const viewer = new PANOLENS.Viewer({
        container: document.getElementById("viewer"),
        controlBar: false,
        autoHideControlBar: true
    });

    // Add panorama to viewer
    viewer.add(panorama);

});
