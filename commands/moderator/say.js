exports.run = (client, message, args) => {
doNotDelete = true;
var messagesay = "";
var argsArray = message.content.split(" ").slice(1);
var arrayLength = argsArray.length;

if (arrayLength > 0) {
	for (let i = 0; i < arrayLength; i++) {
		messagesay = (messagesay + argsArray[i] + " ");
	}
	messagesay = messagesay.trim();
}

message.channel.send(":warning: " + messagesay);
message.delete();
}