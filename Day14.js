/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new Map();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let textNode = this.root;
    for(let i of word) {
        if(!textNode.get(i))
            textNode.set(i,new Map())
        textNode = textNode.get(i);
    }
    textNode.endOfWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let textNode = this.root;
    for(let i of word) {
        textNode = textNode.get(i);
        if(!textNode)
            return false;
    }
    return textNode.endOfWord?true:false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let textNode = this.root;
    for(let i of prefix) {
        textNode = textNode.get(i);
        if(!textNode)
            return false;
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
