const fs = require("fs");
module.exports.config = {
name: "stranger cats",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "stranger cats",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Stranger cats")==0 || (event.body.indexOf("strangercats")==0)) {
		var msg = {
				body: "flyy pussy",
				attachment: fs.createReadStream(__dirname + `/noprefix/Strangercats.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}