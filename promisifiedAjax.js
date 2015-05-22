// Remember that you have the ajaxGet function from the previous section!

/**
 * Given a URL and a base URL, performs the following steps:
 * 1. GETs an array of JSON file names from the URL
 * 2. Adds each of these filenames to the base URL to obtain a list of URLs
 * 3. GETs each of these filenames (the data will be an array of strings)
 * 4. Returns an array that contains the combined output of each of the
 *     JSON files as a string list.
 * @param {string} url The original URL to GET
 * @param {string} baseUrl The base URL for the data JSON documents.
 * @returns {Promise<string[]>}
 */
var multiGet = function (url, baseUrl) {
  	return ajaxGet(url).then(function (data) {
      var promiseArray = [];
    	for (var i = 0; i < data.length; i++) {
    		promiseArray.push(ajaxGet(baseUrl+data[i]));
    	}
    	Promise.all(promiseArray).then(function (arrays) {
  			return arrays;
  		});
	});
};

// *
//  * Returns a promise for a trie given a promise that resolves with a string array as data.
//  * @param {Promise<string[]>} dataPromise 
//    		A promise for the string array that will be used for the trie.
//  * @returns {Promise<Trie>}
 
var trieFromDataPromise = function(dataPromise) {
	return dataPromise.then(function (data) { 
 		return new Trie(data);
 	 });
}

// var classData = multiGet('http://cis197.herokuapp.com/departmentURLs.json',
//                          'http://cis197.herokuapp.com/');
// trieFromDataPromise(classData).then(function (trie) {
//   console.log(trie.getSuggestions('ese'));
// });

// //Expected output: ["ESE 301", "ESE 302"]

window.trieFromDataPromise = trieFromDataPromise;
