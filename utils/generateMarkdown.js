// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.logoLink}

  ## Description<a name="description"></a>
   ${data.description}

  ## Table of Contents
  [Description](#description)
  [Questions](#questions)

  ## Installation
  ${data.installationInstructions}

  ## Usage
  ${data.usageInformation}

  ## License
  This app is licensed under ${data.license}

  ## Contributing
  ${data.contributionGuidelines}

  ## Tests
  ${data.testInstructions}

  ## Questions<a name="questions"></a>
  Github Username: ${data.githubUsername} 

  Github Link: https://github.com/${data.githubUsername}

  Please send an email to ${data.emailAddress} for any additional questions.
`;
}

module.exports = generateMarkdown;
