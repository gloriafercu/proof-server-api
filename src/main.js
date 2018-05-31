// function getPersonalData(url) {
// 	return new Promise(function(resolve, reject) {
// 		let request = new XMLHttpRequest();
// 		request.addEventListener('load', function() {
// 			let data = JSON.parse(request.responseText);
// 			resolve(data);
// 		});
// 		request.open('GET', 'http://localhost:3000/api/personal-data');
// 		request.send();
// 	});
// 	return promiseData;
// }


fetch('http://localhost:3000/api/personal-data')
	.then(function(response) {
		//console.log('objeto parseado: ', response.json());
		return response.json();
	})
	.then(function(json) {

		let data = json;
		console.log('data: ', data);
		for (var i = 0; i < data.length; i++) {
			data[i].name;
			console.log(`Me llamo ${data[i].name} ${data[i].surname} y tengo ${data[i].age} años`);
		}

	});
