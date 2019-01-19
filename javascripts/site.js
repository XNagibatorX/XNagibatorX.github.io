let currentPrice = document.getElementById('currentPrice').innerText;

window.onclick = function onclickRadio() {
	let nameRadio = document.getElementsByName('nameRadio');

	for (let i = 0; i < nameRadio.length; i++) {
		if (nameRadio[i].type === 'radio' && nameRadio[i].checked) {
    		rezultatRadio = nameRadio[i].value;       
		}
	}

	document.getElementById('currentPrice').innerHTML = rezultatRadio*currentPrice;
}