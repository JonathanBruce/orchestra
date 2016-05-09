# Table of Contents

* [Orchestra](#orchestra)
  * [Architecture](#architecture)
  * [Setting Up](#setting-up)
    * [Installing Dependencies](#installing-dependencies)
    * [Selenium](#selenium)
  * [Testing](#testing)
  * [Commands](#commands)
  * [Contributing](#contributing)


# Orchestra

Welcome to Orchestra, Insightpool's Official UI kit.

## Architecture

Orchestra uses the following technologies:

* [Babel - An ES6 transpiler](https://babeljs.io/)
* [Chai - An assertion library](http://chaijs.com/)
* [Intern - A testing suite](https://theintern.github.io/)
* [Leadfoot - An API for cross browser consistency for the Selenium WebDriver](https://theintern.github.io/leadfoot/)
* [React - A view layer from Facebook](https://facebook.github.io/react/)
* [Webpack - JavaScript compiler](https://webpack.github.io/)


## Setting Up

Follow these intructions to set up Orchestra development environment.

### Installing Dependencies

Once you have pulled down the project you must install dependencies via npm.  This can be done by running `npm install` at the project root.


### Selenium

Orchestra leverages the Intern testing suite for functional testing, which also uses selenium to drive the browser and automate UI interactions.  You must install selenium separately for this to work properly.  Follow these steps to do so via `npm`:

* Install the npm `selenium-standalone` package with `npm i -g selenium-standalone`
* One the npm pacakage is installed, install `selenium-standalone` with `selenium-standalone install`
* Start selenium-standalone with `npm run selenium`


## Testing

As stated previously, Orchestra leverages Intern to functional testing.  To find out more about Intern please refer to the architecture section of these docs.  There you will find examples of how to write functional tests.

Intern also leverages Leadfoot as the API to drive the browser.  To find out more about Leadfoot please refer to this architecture section of these docs.  There you will find the API of Leadfoot.

To run the functional tests, run `npm run test` at the project root.


## Commands

Orchestra comes with a plethora of commands for you to use in conjunction with npm.

* `npm run build:docs` to build these docs
* `npm run build:example` to build an example page with all available components that can be found in `example/index.html`
* `npm run build:icons` to build `JSX` components from the the `.svg` files in the `svg` directory and to combine them into one file for easier importing
* `npm run build:intern` to rebuild the intern tests
* `npm run build:test-ui` to build the test UI for the intern tests
* `npm run build:ui` to build the production version of the UI for consumption (consumed as an `npm` module)
* `npm run intern` to re-run intern test (you should use `npm run test` to rebuild and re-run)
* `npm run selenium` to run the selenium server (shortcut for `selenium-standlone start`)
* `npm run test` to run the functional testing suite


## Contributing

Please fork this repository to make changes.

Contibuting code to Orchestra requires that a design exist for it.  These designs are usually done by Insightpool's UI designer for the use cases we need.  Once that's complete, you must present an API with how it will work.  This can be done by making a PR to the docs with said component explanation.  No component will be considered unless it's been thoroughly discussed and has underlying documentation.

Once an API has been cleared relevant source code and tests can be added in a PR.  Component must be functionally tested before being merged.

