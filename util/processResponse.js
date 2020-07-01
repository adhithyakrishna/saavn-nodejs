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

exports.processResult = (response, isSong) => {

	let res = {};

	res['status'] = response.status;
	res['message'] = response.statusText;
	if (response.status == 200) {
		res['response'] = response.data;
		if(isSong)
		{
			let songId = Object.keys(response.data)[0];
			if(songId != null)
			{
				let mediaUrl = response.data[songId].media_preview_url;
				mediaUrl = mediaUrl.replace("preview", "h");
				mediaUrl = mediaUrl.replace("_96_p", "_320");
				mediaUrl = mediaUrl.replace(".mp4", ".mp3");
				response.data["media_url"] = mediaUrl;
			}
		}
	}
	return res;
}