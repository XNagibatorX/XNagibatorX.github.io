const currentPrice = document.getElementById('currentPrice').innerText;

function calculatePrice() {
	let currentSelect = document.getElementById('weightSelect').selectedIndex;
	let weightPriceValue = document.getElementById('weightSelect').options[currentSelect].value;
    document.getElementById("currentPrice").innerHTML = currentPrice * weightPriceValue;
};
