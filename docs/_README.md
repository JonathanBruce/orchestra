# Orchestra

Welcome to Orchestra, Insightpool's Official UI kit.

## Setup

To get up and running, do the following:

* Install selenium-standalone from npm with `npm i -g selenium-standalone`
* Install selenium-standalone with `selenium-standalone install`
* Start selenium-standalone with `npm run selenium`
* Install local npm modules for Orchestra with `npm install`
* In a new terminal window, run `npm run test` to run the functional tests
* To build for production run `npm run build:ui`

Other commands include:

* `npm run build:example` to build an example page with all available components
* `npm run build:icons` to rebuild the icons directory
* `npm run intern` to re-run intern test (you should use `npm run test` to rebuild and re-run)
* `npm run build:test-ui` to build the test UI for the intern tests

## Contributing

Before contributing code, you must present a use case and an API for the component.  No components or code will be considered unless they have first been throughly discussed with an API in mind.  Please make a PR with said component blueprints and they must be cleared by the team first before development work should be started.

Once an API has been cleared, it must be added with the appropriate docs, tests and relevant source code in a PR.