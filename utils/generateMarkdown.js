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
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

