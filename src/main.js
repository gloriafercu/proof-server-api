function getPersonalData(url) {
	return new Promise(function(resolve, reject) {
	const request = new XMLHttpRequest();
	request.addEventListener('load', getPersonalData);
	request.open('GET', 'http://localhost:3000/api/personal-data');
	let data = JSON.parse(request.responseText);
	request.send();
	});
	// Manejar cuando la promesa se haya cumplido
	promiseData.then(function(data) {
		console.log('Promesa cumplida: ', data);
	});
	// Manejar cuando la promesa se haya rechazado
	promiseData.catch(function(error) {
		console.log('Promesa rechazada: ', error);
	});
}


// fetch('http://localhost:3000/api/personal-data')
// 	.then(function(response) {
// 		console.log('objeto parseado: ', response.json());
// 		return response.json();
// 	})
// 	.then(function(json) {
// 		var data = json;
// 		console.log(data);
// 	});
