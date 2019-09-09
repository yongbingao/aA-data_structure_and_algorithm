class Node {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insertRecur(word, root = this.root) {
    if (word.length === 0) return;

    const letter = word[0];

    if (!(letter in root.children)) {
      root.children[letter] = new Node();

      if (word.length === 1) root.children[letter].isTerminal = true;
    }

    this.insertRecur(word.slice(1), root.children[letter]);
  }

  insertIter(word, root = this.root) {
    if (word.length === 0) return;

    let currentRoot = root;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (!(letter in currentRoot.children)) {
        currentRoot.children[letter] = new Node();

        if (i === word.length - 1)
          currentRoot.children[letter].isTerminal = true;
      }

      currentRoot = currentRoot.children[letter];
    }
  }

  searchRecur(word, root = this.root) {
    if (word.length === 0) return;

    const letter = word[0];

    if (letter in root.children) {
      if (word.length === 1) {
        if (root.children[letter].isTerminal) return true;
        else return false;
      }

      return this.searchRecur(word.slice(1), root.children[letter]);
    }

    return false;
  }

  searchIter(word) {
    if (word.length === 0) return;
    let currentRoot = this.root;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];

      if (letter in currentRoot.children) {
        if (i === word.length - 1 && currentRoot.children[letter].isTerminal) {
          return true;
        }

        currentRoot = currentRoot.children[letter];
      } else return false;
    }

    return false;
  }

  wordsWithPrefix(prefix) {
    function allWords(root) {
      const result = [];
      const children = root.children;

      for (const letter in children) {
        const wordArr = allWords(children[letter]);

        if (children[letter].isTerminal) result.push(letter);

        wordArr.forEach(word => {
          const string = letter.concat(word);
          result.push(string);
        });
      }

      return result;
    }

    let prefixStr = '';

    if (prefix.length === 0) {
      return allWords(this.root);
    } else {
      let currentRoot = this.root;

      for (let i = 0; i < prefix.length; i++) {
        const letter = prefix[i];

        if (letter in currentRoot.children) {
          currentRoot = currentRoot.children[letter];
          prefixStr = prefixStr.concat(letter);
        } else {
          return [];
        }
      }

      const wordArr = allWords(currentRoot);
      const result = [];

      if (currentRoot.isTerminal) result.push(prefixStr);

      wordArr.forEach(word => result.push(prefixStr.concat(word)));

      return result;
    }
  }
}

module.exports = {
  Node,
  Trie
};
