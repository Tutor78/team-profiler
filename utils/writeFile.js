const fs = require('fs');

// function to write a new README file into the dist folder using a promise
const writeFile = fileContent => {
    fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
            console.log(err);
            return;
        }
    });
};

module.exports = writeFile;