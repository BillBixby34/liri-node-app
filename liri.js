
function Intro(){
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
console.log("");
};
//Intro();
//begin values

var logKeys = require("./keys.js");
var spotify = require('node-spotify-api');
var twitter = require("twitter");
var request = require("request");
//var address = "";
//var nodeArg = process.argv;
var speak = process.argv[2];
var truthy = process.argv[3];
//for (var i = 2; i < nodeArg.length; i++){
//	address = address + " " + nodeArg[i];
//}
//request() {
//	if (!error && response.statusCode === 200) {}
//}
//case setup//
switch (speak) {

	case "my-tweets":

		tweetSearch();

		break;

	case "spotify-this-song":

		spotSearch();

		break;

	case "movie-this":

		movieSearch();

		break;

	case "do-what-it-says":

		liriDo();

		break;

	default:
		Intro();

};


//functions//
//function spotSearch(){};
//function tweetSearch(){};
function movieSearch() {

	var queryURL = "http://www.omdbapi.com/?t=" + truthy + "&y=&plot=short&apikey=40e9cece";
	request(queryURL, function (error, response, body) {

		if (!error && response.statusCode === 200) {

			console.log("\nOMOMOMOMOMOMOMOMOMOMOMOMOMOM");

			console.log(" ");

			console.log(queryURL);

			console.log("\nMovie Title: " + truthy);

			console.log("\nActors in the movie: " + JSON.parse(body).Actors);

			console.log("\nRelease Year: " + JSON.parse(body).Year);

			console.log("\nCountry where the movie is produced: " + JSON.parse(body).Country);

			console.log("\nLanguage of the movie: " + JSON.parse(body).Language);

			console.log("\nPlot of the movie: " + JSON.parse(body).Plot);

			console.log("\nThe IMDB rating is: " + JSON.parse(body).imdbRating);

			console.log("\nRotten Tomatoes rating is: " + JSON.parse(body).Ratings[2].Value);

			console.log("\nOMOMOMOMOMOMOMOMOMOMOMOMOMOMOM");

		}

	});
}
//function liriDo();
