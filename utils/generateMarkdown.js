// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
-  ${data.description}

## License
[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

## Contents
- [Description](#description)
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation
- To install dependencies run command 
> ${data.dependencies}

## Usage
- ${data.questions}

## Contributions
- ${data.contribution}

## Tests
- To run tests, run command 
> ${data.tests}


## Questions
- If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
