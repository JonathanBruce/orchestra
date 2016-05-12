# Commands !heading

Orchestra comes with a plethora of commands for you to use in conjunction with npm.

* `npm run build:docs` to build these docs
* `npm run build:example` to build an example page with all available components that can be found in `example/index.html`
* `npm run build:icons` to build `JSX` components from the the `.svg` files in the `svg` directory and to combine them into one file for easier importing
* `npm run build:intern` to rebuild the intern tests
* `npm run build:test-ui` to build the test UI for the intern tests
* `npm run build:ui` to build the production version of the UI for consumption (consumed as an `npm` module)
* `npm run intern:browserstack` to re-run the last built intern test on browserstack (you should use `npm run test:browserstack` to rebuild and re-run)
* `npm run intern:local` to re-run the last built intern test locally (you should use `npm run test:local` to rebuild and re-run)
* `npm run test:browserstack` to run the functional testing suite on browserstack
* `npm run test:local` to run the functional testing suite on your local selenium server

