const rows = document.querySelectorAll(".maker__row");
rows.forEach((row) => {
	row.addEventListener("contextmenu", function (e) {
		e.preventDefault();
		console.log("right clicked row");
	});
});
