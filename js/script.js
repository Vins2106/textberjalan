const selection = document.getElementById("selection");
const display = document.getElementById("display");
let textDisplay = document.getElementById("textDisplay");

textDisplay.stop();

function makeText() {
	const text = document.getElementById("text");
	const color = document.getElementById("color");

	if (!text.value || text.value == "" || text.value <= 4) {
		return alert("Minimal text adalah 5")
	}

	textDisplay.innerHTML = text.value;
	textDisplay.style.color = color.value;

	selection.style.display = "none";
	display.style.display = "block";

	alert("Silahkan refresh untuk menganti text")

	textDisplay.start();
}