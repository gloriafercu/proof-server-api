/* RESUELTO CON PROMESAS */

// function getPersonalData() {
// 	return new Promise(function(resolve, reject) {
// 		let request = new XMLHttpRequest();
// 		request.addEventListener('load', function() {
// 			let data = JSON.parse(request.responseText);
// 			resolve(data);
// 			console.log('data: ', data);
// 			for (var i = 0; i < data.length; i++) {
// 				console.log(`Me llamo ${data[i].name} ${data[i].surname} y tengo ${data[i].age} años`);
// 			}
// 		});
// 		request.open('GET', 'http://localhost:3000/api/personal-data');
// 		request.send();
// 	});
// }
// getPersonalData();


/* RESUELTO CON FETCH */


fetch('http://localhost:3000/api/personal-data')
	.then(function(response) {
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
