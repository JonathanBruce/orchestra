## Testing !heading

As stated previously, Orchestra leverages Intern to functional testing.  To find out more about Intern please refer to the architecture section of these docs.  There you will find examples of how to write functional tests.

Intern also leverages Leadfoot as the API to drive the browser.  To find out more about Leadfoot please refer to this architecture section of these docs.  There you will find the API of Leadfoot.

To run the functional tests against the browserstack selenium server, run `npm run test:browserstack` at the project root.

To run the functional tests against your local selenium server, run `npm run test:local` at the project root.  The selenium standalone server must be running for these tests to work.

