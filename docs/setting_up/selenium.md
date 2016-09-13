### Selenium !heading

Orchestra leverages the Intern testing suite for functional testing, which also uses selenium to drive the browser and automate UI interactions.  You must install selenium separately for this to work properly.  Follow these steps to do so via `npm`:

* Install the npm `selenium-standalone` package with `npm i -g selenium-standalone`
* To run selenium on Safari, you will need to install the `SafariDriver` which you can find [here](http://selenium-release.storage.googleapis.com/index.html?path=2.45/)
* Once the npm package is installed, install `selenium-standalone` with `selenium-standalone install`
* Start selenium-standalone with `selenium-standalone start`

Additionally, Selenium requires the JRE to run.  Make sure you've installed the JRE on your system.
