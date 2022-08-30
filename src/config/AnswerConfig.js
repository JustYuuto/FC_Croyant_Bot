const fs = require("fs");
const path = require("path");
const readline = require("readline");
const words = [];

module.exports = {
  async loadWords() {
    const filestream = fs.createReadStream(path.join(__dirname, '../../words.txt'))
    const rl = readline.createInterface({
      input: filestream,
      crlfDelay: Infinity
    });
    for await (const line of rl) {
      words.push(line);
    }
  },
  getWords() {
    return words;
  }
}
