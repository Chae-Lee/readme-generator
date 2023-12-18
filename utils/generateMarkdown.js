// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
-  ${data.description}

## Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation
- To install dependencies run command 
> ${data.dependencies}

## Usage
- ${data.questions}

## License
- ${data.license}

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
