// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.logoLink}

  ## Title
  ${data.title} 
  
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)
  
  ## Description<a name="description"></a>
   ${data.description}

  ## Installation<a name="installation"></a>
  ${data.installationInstructions}

  ## Usage<a name="usage"></a>
  ${data.usageInformation}

  ## License<a name="license"></a>
  This app is licensed under ${data.license}

  ## Contributing<a name="contributing"></a>
  ${data.contributionGuidelines}

  ## Tests<a name="tests"></a>
  ${data.testInstructions}

  ## Questions<a name="questions"></a>
  Github Username: ${data.githubUsername} 

  Github Link: https://github.com/${data.githubUsername}

  Please send an email to ${data.emailAddress} for any additional questions.
`;
}

module.exports = generateMarkdown;
