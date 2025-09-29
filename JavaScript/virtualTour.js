// Store multiple iframes for each monastery
const tours = {
	rumtek: [
		`<iframe src="https://www.google.com/maps/embed?pb=!4v1759130234832!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0VnclQ2VXc.!2m2!1d27.28856332077909!2d88.56169007799076!3f182.00504279140017!4f4.757936584109331!5f0.4000000000000002" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
		`<iframe src="https://www.google.com/maps/embed?pb=!4v1759130314478!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0VndFRIUmc.!2m2!1d27.28862027053181!2d88.56148053028257!3f177.77769131273135!4f-10.207311183765867!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
		`<iframe src="https://www.google.com/maps/embed?pb=!4v1759130285068!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRFptcjdvSlE.!2m2!1d27.28848553899807!2d88.56190567068603!3f288.0582144745813!4f-5.77955587739136!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
	],
	tashiding: [
		`<iframe src="https://www.google.com/maps/embed?pb=!4v1759130152128!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0V6djMyRXc.!2m2!1d27.3096481906329!2d88.29746127199051!3f300!4f20!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
		`<iframe src="https://www.google.com/maps/embed?pb=!4v1759130096272!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0V6b09UVnc.!2m2!1d27.3080960299431!2d88.29783391014004!3f260!4f10!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
		`<iframe src="https://www.google.com/maps/embed?pb=!4v1759130121052!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0V6c1BWSnc.!2m2!1d27.30761952598795!2d88.29809407985367!3f300!4f10!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
	],
	pemayangtse: [
		`<iframe src="https://www.google.com/maps/embed?pb=!4v1759130372723!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREUzSlhyOXdF!2m2!1d27.30291171978085!2d88.24216202374956!3f80!4f10!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
		`<iframe src="https://www.google.com/maps/embed?pb=!4v1759130388053!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREVoSlhucEFF!2m2!1d27.30518919282202!2d88.25156580066201!3f172.0075!4f29.68105!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
		`<iframe src="https://www.google.com/maps/embed?pb=!4v1759130405031!6m8!1m7!1sYUkJaazuh5oUI-j_5xf66g!2m2!1d27.30501017658156!2d88.2512003411821!3f193.50691802258277!4f-15.45987607436534!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
	],
	enchey: [
		`<iframe src="https://www.google.com/maps/embed?pb=!4v1759130438411!6m8!1m7!1sCAoSHENJQUJJaEFHYnlmUVF3WEFFMmVudUt3QUNhTTA.!2m2!1d27.335936773956846!2d88.61916587167339!3f120!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
		`<iframe src="https://www.google.com/maps/embed?pb=!4v1759130447411!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0pzTXEzc3dF!2m2!1d27.33593677395685!2d88.61916587167339!3f40!4f10!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
		`<iframe src="https://www.google.com/maps/embed?pb=!4v1759130469758!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGsxdWJJSmc.!2m2!1d27.335936773956846!2d88.61916587167339!3f351.08817076923077!4f13.846678888888889!5f0.4000000000000002" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
	],
	// Add more monasteries: tashiding: [ ... ], etc.
};

const lightbox = document.getElementById("vtLightbox");
const iframeContainer = document.getElementById("vtIframeContainer");
const closeBtn = document.querySelector(".vt-close");
const prevBtn = document.querySelector(".vt-prev");
const nextBtn = document.querySelector(".vt-next");

let currentTour = [];
let currentIndex = 0;

// Open tour
document.querySelectorAll(".vt-button").forEach((button) => {
	button.addEventListener("click", () => {
		const key = button.getAttribute("data-tour");
		currentTour = tours[key] || [];
		currentIndex = 0;
		if (currentTour.length > 0) {
			iframeContainer.innerHTML = currentTour[currentIndex];
			lightbox.style.display = "flex";
		}
	});
});

// Navigation
nextBtn.addEventListener("click", () => {
	if (currentTour.length > 0) {
		currentIndex = (currentIndex + 1) % currentTour.length;
		iframeContainer.innerHTML = currentTour[currentIndex];
	}
});

prevBtn.addEventListener("click", () => {
	if (currentTour.length > 0) {
		currentIndex = (currentIndex - 1 + currentTour.length) % currentTour.length;
		iframeContainer.innerHTML = currentTour[currentIndex];
	}
});

// Close on X
closeBtn.addEventListener("click", () => {
	lightbox.style.display = "none";
	iframeContainer.innerHTML = "";
});

// Close on outside click
lightbox.addEventListener("click", (e) => {
	if (e.target === lightbox) {
		lightbox.style.display = "none";
		iframeContainer.innerHTML = "";
	}
});
