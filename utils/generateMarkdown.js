// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
   ${data.description}

  ## Installation Instructions
  ${data.installationInstructions}

  ## Usage Information
  ${data.usageInformation}

  ## Contribution Guidelines
  ${data.contributionGuidelines}

  ## Test Instructions
  ${data.testInstructions}

  ## License
  ${data.logoLink}

  ## Questions
  Github Username: ${data.githubUsername} 

  Github Link: https://github.com/${data.githubUsername}
  
  Email: ${data.emailAddress}
`;
}

module.exports = generateMarkdown;
