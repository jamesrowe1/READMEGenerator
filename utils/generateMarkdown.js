// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.logoLink}

  ## Table of Contents
  [Description](#description)\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [License](#license)\n
  [Contributing](#contributing)\n
  [Tests](#tests)\n
  [Questions](#questions)\n
  
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
