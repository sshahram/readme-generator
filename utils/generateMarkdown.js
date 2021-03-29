// create a function that returns description
// create a function that returns table of contents
const renderTableOfContents = contentTable => {
  let listOfContent = '';
  contentTable.forEach((item) => {
    listOfContent += `*[${item.header}](#${(item.header).toLowerCase()})`;
  });
  return listOfContent;
}

// create a function that returns installation
const renderInstallationSection = installation => {
  if(!installation) {
    return '';
  } else {
    return `
    Please see below for installation requirements:
    \`\`\`
    ${installation}
    \`\`\``
  }
}

// create a function that returns usage
const renderUsageSection = usage => {
  if(!usage) {
    return '';
  } else {
    return `${usage}`;
  }
}

// create a function that returns contributing
const renderContributingSection = contributing => {
  if(!contributing) {
    return '';
  } else {
    return `${contributing}`;
  }
}

// create a function that returns tests
const renderTestSection = tests => {
  if(!tests) {
    return '';
  } else {
    return `${tests}`;
  }
}

// create a function that returns questions
const renderQuestionSection = (email, github) => {
  if(!email && !github) {
    return '';
  } else {
    return `If you have any questions please use the following two links to contact me:
    *[GitHub Account](https://github.com/${github})
    *[Email Address](${email})`;
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if(!license) {
    return '';
  } else {
    return `
    ![GitHub license badge](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if(!license) {
    return '';
  } else {
    return `
    ![GitHub license](./license-${license}.txt)`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license =>  {
  if(!license) {
    return '';
  } else {
    return `
    Please see the following link for license information: ${renderLicenseLink(license)}`
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

