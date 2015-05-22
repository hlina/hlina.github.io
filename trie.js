var Trie = function (words) {
  this.data = {};
  _.each(words, function (word) {
    this.addWord(word);
  }.bind(this));
};

Trie.prototype.addWord = function (word) {
  word = word.toUpperCase();
  var addWord = function(word, trieNode) {
    if (word === "") {
      trieNode["end"] =  true;
      return;
    }
    if (trieNode[word.substr(0,1)] === undefined) {
      trieNode[word.substr(0,1)] = Object.create(null);
    }

    var newword = word.substr(1);
    addWord(newword, trieNode[word.substr(0,1)]);
  }

  addWord(word, this.data);
};

Trie.prototype.getSuggestions = function(sub) {
  var words = [];
  sub = sub.toUpperCase();
  subArray = sub.split("");
  var trieWithWords = this.data;
  //traverse trieNode until it you find a trie that comes after the sub
  if (subArray.length) {
    for (var i = 0; i < subArray.length; i++) {
      if (trieWithWords[subArray[i]] !== undefined ){
        trieWithWords = trieWithWords[subArray[i]];
      }
      else {
        trieWithWords = {};
        break;
      }
    }
  }

  else {
    trieWithWords = {};
  }
  //traverse the trie that comes after the sub for the letters, that could be suggestions
  var traverseForWords = function(trieWithWords, word) {
    var roots = Object.keys(trieWithWords);
    for (var i = 0; i < roots.length; i++) {
      if (trieWithWords[roots[i]] === true) {
        word = word.toLowerCase();
        words.push(word.toUpperCase());
      }
      else {
        traverseForWords(trieWithWords[roots[i]], word + roots[i]);
      }
    }
  }

  if (trieWithWords === {}) {
    return [];
  }
  else {
    traverseForWords(trieWithWords, sub);
    return words;
  }
};

window.Trie = Trie;


//var trie = new Trie(['a', 'app', 'apps', 'try', 'tree', 'trek']);
//console.log(JSON.stringify(trie.data, null, '  '));


// Expected output:node 
// {
//   "A": {
//     "end": true,
//     "P": {
//       "P": {
//         "end": true,
//         "S": {
//           "end": true
//         }
//       }
//     }
//   },
//   "T": {
//     "R": {
//       "Y": {
//         "end": true
//       },
//       "E": {
//         "E": {
//           "end": true
//         },
//         "K": {
//           "end": true
//         }
//       }
//     }
//   }
// }


// console.log("SUGGESTED WORDS " + trie.getSuggestions('a'));

/*
Expected output: ["A", "APP", "APPS"]
*/

// console.log("SUGGESTED WORDS " + trie.getSuggestions('t'));

/*
Expected output: ["TRY", "TREE", "TREK"]
*/

// console.log("SUGGESTED WORDS " + trie.getSuggestions('trek'));

/*
Expected output: ["TREK"]
*/

// console.log("SUGGESTED WORDS " + trie.getSuggestions(''));

/*
Expected output: []
*/
