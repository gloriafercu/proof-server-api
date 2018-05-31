const express = require('express');
const app = express();

// CONFIGURATION:
app.use(express.static('src'));
app.set('view engine', 'pug');
app.set('views', 'views');

// ROUTES:
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api/personal-data', (request, response) => {
	console.log('Holaaaaa!! estoy aquí');
	let personalData = [
		{
			name: 'Gloria',
			surname: 'Fernández',
			age: 38
		},
		{
			name: 'Silvia',
			surname: 'de Lucas',
			age: 49
		},
		{
			name: 'Isaac',
			surname: 'de Lucas',
			age: 7
		}
	];

	response.setHeader('Content-Type', 'application/json');
	response.send(JSON.stringify(personalData));
	// Esto es para enviar mi objeto al servidor por eso lo convertimos en un objeto plano
});

// START APP
app.listen(3000, () => console.log('Example app listening on port 3000!'));
