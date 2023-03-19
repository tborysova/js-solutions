class TrieNode {
  constructor() {
    this.children = {};
    this.word = false;
  }
}

var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let cur = this.root;
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    if (!cur.children[c]) {
      cur.children[c] = new TrieNode();
    }
    cur = cur.children[c];
  }
  cur.word = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  function dfs(j, root) {
    let cur = root;
    for (let i = j; i < word.length; i++) {
      const c = word[i];
      if (c === ".") {
        for (const child of Object.values(cur.children)) {
          if (dfs(i + 1, child)) {
            return true;
          }
        }
        return false;
      } else {
        if (!cur.children[c]) {
          return false;
        }
        cur = cur.children[c];
      }
    }
    return cur.word;
  }
  return dfs(0, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
