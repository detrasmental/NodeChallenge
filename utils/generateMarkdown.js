// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.Title}
![NPM](https://img.shields.io/npm/l/m)
![GitHub Issues](https://img.shields.io/github/issues-raw/${data.Username}/${data.Title})

## Repository
https://github.com/${data.Username}/${data.Title}

## Description
${data.Description}
## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Credits](#Credits)
- [Contact Me](#Questions)

## Installation:
You must have the following dependencies installed to run this application.
${data.Installation}

## Usage
To use this application, type [${data.Usage}] in the terminal.

## License
![badge](https://img.shields.io/badge/license-${data.License})
This application is covered by the ${data.License} license. 

## Credits
${data.Credits}

## Contact Me
Find me on GitHub: [${data.Username}](https://github.com/${data.Username})

Email me with any questions: ${data.Email}
`;
}

module.exports = generateMarkdown;
