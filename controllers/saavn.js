const axios = require('axios');
const { json } = require('body-parser');

exports.getAutoCompleteResults = (req, res, next) => {

	axios.get('https://www.saavn.com/api.php?__call=autocomplete.get', {
		params: {
			_marker: 0,
			query: req.params.input,
			ctx: "android",
			_format: "json"
		}
	}).then(function (response) {
		console.log(response.data);
		res.send({ 'result': response.data });
	}).catch(function (error) {
		if (error.response) {
			
		}
	});
};


exports.getSongSearchResults = (req, res, next) => {

	let page = req.query.page === undefined ? 1 : req.query.page;
	let count = req.query.count === undefined ? 10 : req.query.count;

	axios.get('https://www.saavn.com/api.php?__call=search.getResults', {
		params: {
			_marker: 0,
			q: req.params.input,
			ctx: "android",
			p: page,
			n: count,
			api_version: 4,
			_format: "json"
		}
	}).then(function (response) {
		res.send({ 'result': response.data });
	});
};

exports.getAlbumSearchResults = (req, res, next) => {

	let page = req.query.page === undefined ? 1 : req.query.page;
	let count = req.query.count === undefined ? 10 : req.query.count;

	axios.get('https://www.saavn.com/api.php?__call=search.getAlbumResults', {
		params: {
			_marker: 0,
			q: req.params.input,
			ctx: "android",
			p: page,
			n: count,
			api_version: 4,
			_format: "json"
		}
	}).then(function (response) {
		res.send({ 'result': response.data });
	});
};


exports.getSongsFromAlbum = (req, res, next) => {

	axios.get('https://www.saavn.com/api.php?__call=webapi.get', {
		params: {
			_marker: 0,
			includeMetaTags: 0,
			type: "album",
			token: req.params.id,
			ctx: "android",
			api_version: 4,
			_format: "json"
		}
	}).then(function (response) {
		res.send({ 'result': response.data });
	});
};

exports.getsongId = (req, res, next) => {

	axios.get('https://www.saavn.com/api.php?__call=webapi.get', {
		params: {
			_marker: 0,
			includeMetaTags: 0,
			type: "song",
			token: req.params.id,
			ctx: "android",
			api_version: 4,
			_format: "json"
		}
	}).then(function (response) {
		res.send({ 'result': response.data });
	});
};


exports.getsong = (req, res, next) => {

	axios.get('https://www.jiosaavn.com/api.php?__call=song.getDetails', {
		params: {
			cc:"in",
			_marker: 0,
			_format: "json",
			model : "Redmi_5A",
			pids: req.params.pid
		}
	}).then(function (response) {
		res.send({ 'result': response.data });
	});
};