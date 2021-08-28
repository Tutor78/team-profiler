# Team Profiler

![badmath](https://img.shields.io/badge/License-MIT-informational)

## Description

The team profiler is a command line app that generates an html page based on the information that is input. An example of it can be found [here](./dist/example.html).

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Languages/Frameworks](#languages/frameworks)
* [Dependancies](#dependancies)
* [Tests](#tests)

## Installation

First, clone the files to your own computer. Next, navigate to the folder that contains the root files in it. Finally, run "npm install" to download the required dependancies.

## Usage

While in the folder that contains the index.js file, run node index.js to begin the appication. After that, you will be presented with a series of prompts that will help you to dynamically generate the cards that will hold the employee data. When you are finished, answer no when prompted to add another employee and your file will be generated in the dist folder. [Here](https://drive.google.com/file/d/1THGgb-x0eo7E630xHOtQSpmx1l5wNphG/view) is a video that demonstrates the application with five employees, but you are able to add as many as you would like.

## License

This project is licensed under the [MIT](LICENSE) license.

## Languages/Frameworks

* Javascript

    * node.js

## Dependancies

* Inquirer
* Jest

## Tests

Tests for this application can be found under the __tests__ folder and can be run by navigating to the root folder and using "npm test" on the command line.