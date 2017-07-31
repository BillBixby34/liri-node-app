var request = require("./keys.js");
var spotify = require('spotify');
var address = "";
//var nodeArg = process.argv;
//for (var i = 2; i < nodeArg.length; i++){
//	address = address + " " + nodeArg[i];
//}
//request() {
//	if (!error && response.statusCode === 200) {}
//}

console.log("-----------------------");
console.log("Welcome to LIRI: ");
console.log("Language Interpretation and Recognition Interface");
console.log("-----------------------");
console.log("LIRI can take in one of the following commands at a time: ");
console.log("-----------------------");
console.log("\nmy-tweets");
console.log("\nspotify-this-song");
console.log("\nmovie-this");
console.log("\ndo-what-it-says");
console.log("-----------------------");
console.log("You may 'speak' with LIRI now.");