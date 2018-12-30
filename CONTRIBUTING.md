# Contributing to React Cupertino
Welcome, and thank you for taking the time to contribute to React Cupertino!
## Code of Conduct
By participating in this project, you're agreeing to comply with our [CODE_OF_CONDUCT](https://github.com/klymenkoo/react-cupertino/blob/master/CODE_OF_CONDUCT.md).
## How can I contribute?
There are several ways that you can contribute. We would be tremendously grateful for bug fixes, development of new features as well as early feedback on in-development features, bug reports with repro steps, documentation updates, feature tests, suggestions, and ideas.
### Reporting Issues
The preferred way of reporting issues, requesting features is to file an issue on our [issue page](https://github.com/klymenkoo/react-cupertino/issues). Before creating an issue, search the existing issue to see if the issue or feature request has already been filed. 
A new issue should have:
* a short and clear title
* description
* repro steps (if it is a bug)
* actual (what you get)
* expected (what is expected)
* screenshots/gifs if applicable
Feel free to add GitHub labels to the issues.
### Bug fixes and feature enhancements
Pick an issue and leave a comment that you would like to grab it. After the issue was assigned to you, you're good to start hacking! 
#### Setup
1. Fork the repository on GitHub
2. Clone your forked repository to your machine:
`git clone https://github.com/<yourname>/react-cupertino.git`
3. Change directory to the cloned repository: `cd react-cupertino`
4. Add a remote: `git remote add upstream https://github.com/react-cupertino/react-cupertino.git`
5. Create a branch for your patch: `git checkout -b issue-branch-name`
6. Install dependencies by running `npm install`
7. Run `npm start` to build and run your local dev environment.
8. Open http://localhost:9001/ to see the Storybook with the library components.

#### Code style
We use ESLint as our JavaScript linter (we recommend to use an ESLint extension in your IDE, so the errors will be highlighted). Before you commit your changes, run prettier to format the code: `npm run prettier`.

Make your changes, run linter, make sure there is no eslint errors/warnings in your changes. After that push your code to git:
`git push origin issue-branch-name`

## Submitting a Pull Request
**All pull requests must be associated with a specific GitHub issue.**
After you have pushed your changes to the forked repository,create a Pull Request on GitHub. Your pull request should follow the following rules:
1. Your title should have the following format: `Fix #<issueId>: <description>.`
Example: `Fix #57: Added tests for Textbox component.`
2. In the description, write about changes you implemented, and don't forget to mention the issue # there. Include screenshots/gifs if applicable.
