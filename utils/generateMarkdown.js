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
- To install dependencies run command ${data.dependencies}

## Usage

## License
- ${data.license}

## Contributions
- ${data.contribution}

## Tests
- To run tests, run command ${data.tests}

## Questions
- ${data.questions}
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.github}.


`;
}

module.exports = generateMarkdown;
