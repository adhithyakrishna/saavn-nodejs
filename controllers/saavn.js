const axios = require('axios');
const { json } = require('body-parser');

exports.getSearchResults = (req, res, next) => {

	axios.get('https://www.saavn.com/api.php?__call=autocomplete.get', {
		params: {
			_marker: 0,
			query: req.params.id,
			ctx: "android",
			_format: "json"
		}
	}).then(function (response) {
		console.log(response.data);
		res.send({ 'result': response.data });
	});
};


exports.getSongResults = (req, res, next) => {

	let page = req.query.page === undefined ? 1 : req.query.page;
	let count = req.query.count === undefined ? 10 : req.query.count;

	axios.get('https://www.saavn.com/api.php?__call=search.getResults', {
		params: {
			_marker: 0,
			q: req.params.song,
			ctx: "android",
			p: page,
			n: count,
			// api_version=4, add if required
			_format: "json"
		}
	}).then(function (response) {
		res.send({ 'result': response.data });
	});
};