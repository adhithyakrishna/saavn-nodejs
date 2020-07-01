const { response } = require("express");

exports.processSearchResult = (response) => {
	let res = {};

	res['message'] = response.statusText;
	res['status'] = response.status;

	if (response.status == 200) {
		res['response'] = response.data;
	}

	return res;
}

exports.processResult = (response) => {

	let res = {};

	res['status'] = response.status;
	res['message'] = response.statusText;
	if (response.status == 200) {
		res['response'] = response.data;
	}
	return res;
}