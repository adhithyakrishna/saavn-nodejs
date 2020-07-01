const axios = require('axios');
const { json } = require('body-parser');
const e = require('express');

exports.getAutoCompleteResults = (req, res, next) => {

	axios.get('https://www.saavn.com/api.php?__call=autocomplete.get', {
		params: {
			_marker: 0,
			query: req.params.input,
			ctx: "android",
			_format: "json"
		}
	}).then(function (response) {
		res.status(response.status);
		if (response.status == 200) {
			res.send({ 'response': response.data });
		} else {
			res.send({ 'message': response.statusText });
		}
	}).catch(function () {
		res.status(500).send({ 'error': 'Internal server error' });
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
		res.status(response.status);
		if (response.status == 200) {
			res.send({ 'response': response.data });
		} else {
			res.send({ 'message': response.statusText });
		}
	}).catch(function () {
		res.status(500).send({ 'error': 'Internal server error' });
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
		res.status(response.status);
		if (response.status == 200) {
			res.send({ 'response': response.data });
		} else {
			res.send({ 'message': response.statusText });
		}
	}).catch(function () {
		res.status(500).send({ 'error': 'Internal server error' });
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
		res.status(response.status);
		if (response.status == 200) {
			if (typeof response.data == "object" && Array.isArray(response.data)) {
				if (response.data.length == 0) {
					response.data = { "message": "song not found!" };
				}
			}
			else {
				response.data["message"] = response.statusText;
			}
			res.send({ 'response': response.data });
		} else {
			res.status.send({ 'message': response.statusText });
		}
	}).catch(function () {
		res.status(500).send({ 'error': 'Internal server error' });
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
		res.status(response.status);
		if (response.status == 200) {
			if (typeof response.data == "object" && Array.isArray(response.data)) {
				if (response.data.length == 0) {
					response.data = { "message": "song not found!" };
				}
			}
			else {
				response.data["message"] = response.statusText;
			}
			res.send({ 'response': response.data });
		} else {
			res.status.send({ 'message': response.statusText });
		}
	}).catch(function (error) {
		res.status(500).send({ 'error': 'Internal server error' });
	});
};


exports.getsong = (req, res, next) => {

	axios.get('https://www.jiosaavn.com/api.php?__call=song.getDetails', {
		params: {
			cc: "in",
			_marker: 0,
			_format: "json",
			model: "Redmi_5A",
			pids: req.params.pid
		}
	}).then(function (response) {
		res.status(response.status);
		if (response.status == 200) {
			if (typeof response.data == "object" && Array.isArray(response.data)) {
				if (response.data.length == 0) {
					response.data = { "message": "song not found!" };
				}
			}
			else {
				response.data["message"] = response.statusText;
			}
			res.send({ 'response': response.data });
		} else {
			res.status.send({ 'message': response.statusText });
		}
	}).catch(function () {
		res.status(500).send({ 'error': 'Internal server error' });
	});
};