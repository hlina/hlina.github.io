/**
 * Returns a promise representing the value of a GET request to a URL.
 * @param {string} url The URL for the get request.
 * @returns {Promise<object>}
 */
var ajaxGet = function (url) {
	return Promise.resolve($.get(url));
};

/**
 * Returns a promise for a trie given a remote URL that points to a JSON string array.
 * @param {string} url The URL for the data.
 * @returns {Promise<Trie>}
 */
 var trieFromURL = function (url) {
 	return ajaxGet(url).then(function (data) { 
 		return new Trie(data);
 	 });
}

window.trieFromURL = trieFromURL;

// trieFromURL("http://cis197.herokuapp.com/cisClasses.json").then(function (trie) {
// 	console.log(trie.getSuggestions('C'));
// });

// Expected output: ["CIS 110", "CIS 120", "CIS 121", "CIS 197", "CIS 240"]
