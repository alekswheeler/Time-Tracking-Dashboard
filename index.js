let express = require('express');
let app = express();
let port = 3000;
const path  = require("path");

/**
 * Trabalhando com JSON
 */

const items = [
	{
		title: "A",
		message: "Alguma coisa"
	},
	{
		title: "B",
		message: "Borboleta"
	},
	{
		title: "C",
		message: "Cachorro"
	},
	{
		title: "D",
		message: "Dinossauro"
	}
];

app.set("view engine", "ejs");

app.get('/', (req, res) => {
	res.render("pages/index", {
		messages: items
	});
});

app.get('/sobre', (req, res) =>{
	res.render("pages/sobre");
});

app.use(express.static(path.join(__dirname,"public")))

app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`)
	console.log('Para derrubar o servidor: ctrl + c');
})