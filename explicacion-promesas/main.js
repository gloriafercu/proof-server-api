/*

Las PROMESAS surgieron cuando tenemos un encadenamiento de procesos que ocurren de forma asíncrona o cuando tienes un montón de callbacks (CALLBACK HELL).

Una promesa recibe como argumento un callback que a su vez tiene 2 argumentos (resolve, reject) que son funciones a su vez también.

		var promise1 = new Promise(function(resolve, reject) {});

Las promesas tienen tres estados:
	- pending: está pendiente y no se ha llamado ni a resolve ni reject.
	- fulfilled: cuando se ha cumplido la promesa y se llama a resolve.
	- rejected: si se ha llamado a reject.

Tienen varios métodos:
	- then()
	- catch()
	- entre otros (mirar MDN)

OJOOOOOO:	Mientras no llame al método send() no se realiza la promesa y quedaría en el estado pending.

En esas promesas tengo la posibilidad de decirle cuando vaya bien hazme lo siguiente (con then()) y cuando vaya mal hazme esto otro (con catch()).

También puedo encadenar varios then(), y se ejecutan todos los then(). En el caso de los catch, de que se ejecuta el primero se para.

Encadeno callbacks y puedo leer el código como si fuera síncrona aunque es asíncrono.

En el momento en que yo invoco al then() se ejecuta de forma síncrona porque ya con la promesa ha ocurrido todo lo que era asíncrono.

Dejamos de pasar el callback(el que se pasaba en AJAX) en el modelo de promesas. Donde se pasa el callback es donde ahora se está resolviendo la promesa, y donde se ejecutaba el callback se pone resolve(parámetro).

*/

function getPromise(url) {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();
		request.open('GET', url);
		request.addEventListener('load', () => {
			resolve(request.responseText);
		});
		request.addEventListener('error', () => {
			reject(request.status);
		});
		request.send();
	});
}

// Si pongo en marcha el servidor me devuelve todo el texto.

getPromise('http://localhost:3000/api/personal-data')
	.then((text) => {
		console.log('Texto del servidor: ', text);
		return text;
	})
	.then((text) => {
		console.log('Otro then para ver que los then se van encadenando: ', text);
	});

// Si paro el servidor a posta (para que no haya petición al servidor) para que capture el error entonces veré estos mensajes de error. Status=0 es cuando el servidor está caído, status=500 cuando revienta el servidor.

getPromise('http://localhost:3000/api/personal-data').catch((status) => {
	if (status == 0) {
		console.log('El servidor está caído');
	}
	if (status == 500) {
		console.log('Error no controlado en el servidor');
	}
	console.log('Error: ', status);
});


/* IMPLEMENTACIÓN DE PROMESAS CON JAVASCRIPT */

function promesa(action) {
	let state = 'pending';
	let resolved = null;
	let rejected = null;
	action(resolve, reject);
	function resolve(resolvedData) {
		console.log('-------------Is resolving');
		resolved = resolvedData;
		state = 'resolved';
	}
	function reject(error) {
		console.log('-------------Is rejecting');
		rejected = error;
		state = 'rejected';
	}
	let self = {
		then: function(callback) {
			console.log('-------------Then');
			if (state == 'resolved') {
				callback(resolved);
			}
		},
		catch: function(callback) {
			console.log('-------------Catch');
			if (state == 'rejected') {
				callback(rejected);
			}
		},
		getState: () => { return state }
	};
	return self;
}

var p = promesa((resolve, reject) => {
	console.log('foo');
	resolve(20)
}); // foo // -------Is resolving
p.then((result) => {console.log('result: ', result)}); // ----Then // result: 20
p.getState(); // ------- 'resolved'


var p = promesa((resolve, reject) => {
	setTimeout(() => {
		resolve('foo');
	}, 5000);
});
p.getState(); // 'pending'
// ---------Is resolving
p.getState(); // 'resolved'


/* PROMESAS USANDO FETCH */

fetch('http://localhost:3000/api/personal-data')
	.then((response) => {
		return response.json();
	})
	.then((myJson) => {
		console.log(myJson);
	});
