//requires fs and inquirer
var fs = require("fs");
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown.js");

const { title } = require("process");

// array of questions for user
const questions = [
  { name: "title", message: "Project Title:", type: "input" },
  { name: "description", message: "Enter a Description:", type: "input" },
  {
    name: "installationInstructions",
    message: "Enter Installation Instructions:",
    type: "input",
  },
  {
    name: "usageInformation",
    message: "Enter Usage Information:",
    type: "input",
  },
  {
    name: "contributionGuidelines",
    message: "Enter Contribution Guidelines:",
    type: "input",
  },
  {
    name: "testInstructions",
    message: "Enter Test Instructions:",
    type: "input",
  },
  {
    name: "license",
    message: "Choose License:",
    type: "list",
    choices: ["MIT", "Mozilla"],
  },
  {
    name: "githubUsername",
    message: "Enter Github Username:",
    type: "input",
  },
  {
    name: "emailAddress",
    message: "Enter Email Address:",
    type: "input",
  },
];

let licenseArr = [
  {
    licenseName: "MIT",
    link:
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
  },
  {
    licenseName: "Mozilla",
    link:
      "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    var licenseLogoLink = licenseArr.filter(
      (logo) => logo.licenseName === answers.license
    );
    answers.logoLink = licenseLogoLink[0].link;
    console.log(answers);
    let readmeText = generateMarkdown(answers);

    writeToFile("README.md", readmeText);
  });
}

// function call to initialize program
init();