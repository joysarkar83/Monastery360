// Create panorama using local image path
const panorama = new PANOLENS.ImagePanorama(
	"./Resources/Images/monastery360.jpg"
);

// Disable all user interactions
panorama.addEventListener("enter", function () {
	panorama.autoRotate = true; // enable auto rotation
	panorama.autoRotateSpeed = 0.2; // adjust speed
	panorama.enableControl = false; // disable dragging/zooming
});

// Initialize viewer
const viewer = new PANOLENS.Viewer({
	container: document.getElementById("viewer"),
	controlBar: false,
	autoHideControlBar: true,
});

viewer.add(panorama);
