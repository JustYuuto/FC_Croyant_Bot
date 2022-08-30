const fs = require("fs");
const path = require("path");
const words = []

module.exports = {
    async loadWords(){
        const filestream = fs.createReadStream(path.join(__dirname, '../../words.txt'))
        
    }
}