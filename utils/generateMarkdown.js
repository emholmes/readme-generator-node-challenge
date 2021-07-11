// TODO: Create a function that returns a license badge based on which license is passed in
const badges = [
  {
    licenseName: "MIT", 
    licenseUrl: "(https://opensource.org/licenses/MIT)",
    badgeSvg: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  }, 
  {
    licenseName: "APACHE 2.0",
    licenseUrl: "(https://opensource.org/licenses/Apache-2.0)",
    badgeSvg: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
  },
  {
    licenseName: "Boost",
    licenseUrl: "(https://www.boost.org/LICENSE_1_0.txt)",
    badgeSvg: "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]"
  },
  {
    licenseName: "CCO",
    licenseUrl: "(http://creativecommons.org/publicdomain/zero/1.0/)",
    badgeSvg: "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)]"
  }, 
  {
    licenseName: "Eclipse",
    licenseUrl: "(https://opensource.org/licenses/EPL-1.0)",
    badgeSvg: "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]"
  },
  {
    licenseName: "Perl",
    licenseUrl: "(https://opensource.org/licenses/Artistic-2.0)",
    badgeSvg: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]"
  },
  {
    licenseName: "GPL 3.0",
    licenseUrl: "(https://www.gnu.org/licenses/gpl-3.0)",
    badgeSvg: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
  },
  {
    licenseName: "BSD 3",
    licenseUrl: "(https://opensource.org/licenses/BSD-3-Clause)",
    badgeSvg: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]"
  }
]
const findLicenseArray = (license) => {
  const badgeArray = badges.filter(arr => arr["licenseName"] === license);
  return badgeArray[0];
}

// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === "None") {
    return "";
  } else {
    // const badgeArray = badges.filter(arr => arr["licenseName"] === license);
    // return badgeArray[0].badge;
    let licenseArray = findLicenseArray(license);
    return `${licenseArray.badgeSvg}${licenseArray.licenseUrl}`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === "None") {
    return "";
  } else {
    return `* [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license === "None") {
    return "";
  } else {
    let licenseArray = findLicenseArray(license);
    return `## License \n Licensed under the [${license}]${licenseArray.licenseUrl} license. `;
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return ` 
  # ${data.title} 

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To install any necessay dependencies run the following command: 

    ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  To run tests, use the following command: 
  
    ${data.tests}

  ## Questions
  If you have any questions about the repo, create a new issue and add the label "question" or contact me directly at [${data.email}](mailto:${data.email}). 
  
  View more of my work on GitHub: [${data.username}](https://github.com/${data.username}).
  `;
}

module.exports = generateMarkdown;
