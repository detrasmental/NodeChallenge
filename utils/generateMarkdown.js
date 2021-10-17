// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.Title}
![Dependents (via libraries.io)](https://img.shields.io/librariesio/dependents/npm/inquirer)
![GitHub Issues](https://img.shields.io/github/issues-raw/${data.Username}/${data.Title})
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/${data.Username}/${data.Title})
![Lines of code](https://img.shields.io/tokei/lines/github/${data.Username}/${data.Title})


## Repository
https://github.com/${data.Username}/${data.Title}

## Description
${data.Description}
## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Screenshot](#Screenshot)
- [License](#License)
- [Credits](#Credits)
- [Contribution](#contributes)
- [Contact Me](#Contact)

## Installation:
You must have the following dependencies installed to run this application.<br>
${data.Installation}

## Usage
To use this application, type [${data.Usage}] in the terminal.

## Screenshot
![](${data.Screenshot})

## Contribution
${data.contribution}

## License

This application is covered by the ${data.License} license. 

## Credits
${data.Credits}

## Contact
Find me on GitHub: [${data.Username}](https://github.com/${data.Username})

Email me with any questions: ${data.Email}
`;
}

module.exports = generateMarkdown;

