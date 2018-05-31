function getPersonalData() {
	let request = new XMLHttpRequest();
	request.addEventListener('load', getPersonalData);
	let data = JSON.parse(request.responseText);
	request.open('GET', 'http://localhost:3000/api/personal-data');
	request.send();
}
