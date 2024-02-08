function initApp() {
	if (url.searchParams.get("month") == null) {
		url.searchParams.set("month", "Челябинск");
	}
	if (!citiesList.includes(url.searchParams.get("month"))) {
		url.searchParams.set("month", citiesList[0]);
	}
	history.pushState(null, null, url);
	const currentMonthEl = document.querySelectorAll(".currentCity");
	currentCityTextContainers.forEach((textContainer) => {
		textContainer.innerHTML = url.searchParams.get("month");
	});
}
