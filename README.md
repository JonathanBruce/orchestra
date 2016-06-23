# Table of Contents

* [Orchestra](#orchestra)
  * [Architecture](#architecture)
  * [Setting Up](#setting-up)
    * [Installing Dependencies](#installing-dependencies)
    * [Selenium](#selenium)
  * [Testing](#testing)
* [API](#api)
  * [In A Nutshell](#in-a-nutshell)
  * [Base](#base)
    * [`PrimaryButton`](#primarybutton)
    * [`SecondaryButton`](#secondarybutton)
    * [`TertiaryButton`](#tertiarybutton)
  * [Buttons](#buttons)
    * [`BrandButton`](#brandbutton)
    * [`FemaleButton`](#femalebutton)
    * [`MaleButton`](#malebutton)
    * [`PrimaryNegativeButton`](#primarynegativebutton)
    * [`PrimaryNeutralButton`](#primaryneutralbutton)
    * [`PrimaryPositiveButton`](#primarypositivebutton)
    * [`SecondaryNeutralButton`](#secondaryneutralbutton)
    * [`SecondaryPositiveButton`](#secondarypositivebutton)
    * [`TertiaryNegativeButton`](#tertiarynegativebutton)
    * [`TertiaryNeutralButton`](#tertiaryneutralbutton)
    * [`TertiaryPositiveButton`](#tertiarypositivebutton)
  * [Form](#form)
    * [`Input`](#input)
  * [Miscellaneous](#miscellaneous)
    * [`PillToggle`](#pilltoggle)
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

Follow these intructions to set up the Orchestra development environment.

If you would rather have a push button start, run `setup.sh` that will everything for you.

### Installing Dependencies

Once you have pulled down the project you must install dependencies via npm.  This can be done by running `npm install` at the project root.


### Selenium

Orchestra leverages the Intern testing suite for functional testing, which also uses selenium to drive the browser and automate UI interactions.  You must install selenium separately for this to work properly.  Follow these steps to do so via `npm`:

* Install the npm `selenium-standalone` package with `npm i -g selenium-standalone`
* One the npm pacakage is installed, install `selenium-standalone` with `selenium-standalone install`
* Start selenium-standalone with `selenium-standalone start`

Additionally, Selenium requires the JRE to run.  Make sure you've installed the JRE on your system.
## Testing

As stated previously, Orchestra leverages Intern to functional testing.  To find out more about Intern please refer to the architecture section of these docs.  There you will find examples of how to write functional tests.

Intern also leverages Leadfoot as the API to drive the browser.  To find out more about Leadfoot please refer to this architecture section of these docs.  There you will find the API of Leadfoot.

To run the functional tests against the browserstack selenium server, run `npm run test:browserstack` at the project root.

To run the functional tests against your local selenium server, run `npm run test:local` at the project root.  The selenium standalone server must be running for these tests to work.


# API

Below you can find Orchestra's API for it's components as well as how it's often used.

## In A Nutshell

The idea behind Orchestra is simple: reusable bits of UI functionality that can easily plug into your Redux powered application.  For example, considering the following:

```javascript
import { PrimaryPositiveButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<PrimaryPositiveButton>Hello!</PrimaryPositiveButton>
		);
	}
}
```

This would render Orchestra's `PrimaryPositiveButton` component that is simply a button with certain style attributes and has it's own API attached to it.  Since this is a button built with React you can pass all the usual suspects you would expect to pass to a React component like `onClick`, `onKeyUp`, etc...



## Base

The following describes all of the internal base components available for use in Orchestra.

### `PrimaryButton`

* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-primary`
* __Located at__: `src/components/base/Primary.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The PrimaryButton is used as a base for primary buttons internally to build more complex buttons for the Insightpool application.


### `SecondaryButton`

* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-secondary`
* __Located at__: `src/components/base/Secondary.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The SecondaryButton is used as a base for secondary buttons internally to build more complex buttons for the Insightpool application.


### `TertiaryButton`

* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-tertiary`
* __Located at__: `src/components/base/Tertiary.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The TertiaryButton is used as a base for primary buttons internally to build more complex buttons for the Insightpool application.



## Buttons

The following describes all of the button components available for use in Orchestra.

### `BrandButton`

* __Internal components used:__ `PrimaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-brand`
* __Located at__: `src/components/buttons/Brand.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `active`      | `boolean`     | Gives the component an active class           |
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The BrandButton is used in conjunction with Insightpool searches.

**Usage:**

```javascript
import { BrandButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<BrandButton active={ true } />
		);
	}
}
```


### `FemaleButton`

* __Internal components used:__ `PrimaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-female`
* __Located at__: `src/components/buttons/Female.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `active`      | `boolean`     | Gives the component an active class           |
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The FemaleButton is used in conjunction with Insightpool searches.

**Usage:**

```javascript
import { FemaleButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<FemaleButton active={ true } />
		);
	}
}
```


### `MaleButton`

* __Internal components used:__ `PrimaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `male`
* __Located at__: `src/components/buttons/Male.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `active`      | `boolean`     | Gives the component an active class           |
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The MaleButton is used in conjunction with Insightpool searches.

**Usage:**

```javascript
import { MaleButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<MaleButton active={ true } />
		);
	}
}
```


### `PrimaryNegativeButton`

* __Internal components used:__ `PrimaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-primary`, `orch-negative`
* __Located at__: `src/components/buttons/PrimaryNegative.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The PrimaryNegativeButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import { PrimaryNegativeButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<PrimaryNegativeButton>Hello World!</PrimaryNegativeButton>
		);
	}
}
```


### `PrimaryNeutralButton`

* __Internal components used:__ `PrimaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-primary`, `orch-neutral`
* __Located at__: `src/components/buttons/PrimaryNeutral.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The PrimaryNeutralButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import { PrimaryNeutralButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<PrimaryNeutralButton>Hello World!</PrimaryNeutralButton>
		);
	}
}
```
### `PrimaryPositiveButton`

* __Internal components used:__ `PrimaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-primary`, `orch-positive`
* __Located at__: `src/components/buttons/PrimaryPositive.jsx`

**Props:**

| Name          | Type                        | Desciption                                    |
| ------------- |-----------------------------| ----------------------------------------------|
| `disabled`    | `boolean`                   | Disables the component                        |
| `icon`        | `object<react.element>`     | React icon element                            |

**Reason for existing:**

The PrimaryPositiveButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import {
	Icons,
	PrimaryPositiveButton
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<PrimaryPositiveButton icon={ <Icons.MyIcon /> } />Hello World!</PrimaryPositiveButton>
		);
	}
}
```


### `SecondaryNeutralButton`

* __Internal components used:__ `SecondaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-secondary`, `orch-neutral`
* __Located at__: `src/components/buttons/SecondaryNeutral.jsx`

**Props:**

| Name          | Type                        | Desciption                                    |
| ------------- |-----------------------------| ----------------------------------------------|
| `disabled`    | `boolean`                   | Disables the component                        |
| `icon`        | `object<react.element>`     | React icon element                            |

**Reason for existing:**

The SecondaryNeutralButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import {
	Icons,
	SecondaryNeutralButton
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<SecondaryNeutralButton icon={ <Icons.MyIcon /> } />Hello world!</SecondaryNeutralButton>
		);
	}
}
```


### `SecondaryPositiveButton`

* __Internal components used:__ `SecondaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-secondary`, `orch-positive`
* __Located at__: `src/components/buttons/SecondaryNegative.jsx`

**Props:**

| Name          | Type                        | Desciption                                    |
| ------------- |-----------------------------| ----------------------------------------------|
| `disabled`    | `boolean`                   | Disables the component                        |
| `icon`        | `object<react.element>`     | React icon element                            |

**Reason for existing:**

The SecondaryPositiveButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import {
	Icons,
	SecondaryPositiveButton
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<SecondaryPositiveButton icon={ <Icons.MyIcon /> } />Hello world!</SecondaryPositiveButton>
		);
	}
}
```


### `TertiaryNegativeButton`

* __Internal components used:__ `TertiaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-tertiary`, `orch-negative`
* __Located at__: `src/components/buttons/TertiaryNegative.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The TertiaryNegativeButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import { TertiaryNegativeButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<TertiaryNegativeButton icon={ <Icons.MyIcon /> } />
		);
	}
}
```


### `TertiaryNeutralButton`

* __Internal components used:__ `TertiaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-tertiary`, `orch-negative`
* __Located at__: `src/components/buttons/TertiaryNegative.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The TertiaryNeutralButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import { TertiaryNeutralButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<TertiaryNeutralButton icon={ <Icons.MyIcon /> } />
		);
	}
}
```


### `TertiaryPositiveButton`

* __Internal components used:__ `TertiaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-tertiary`, `orch-positive`
* __Located at__: `src/components/buttons/TertiaryPositive.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The TertiaryPositiveButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import {
	Icons,
	TertiaryPositiveButton
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<TertiaryPositiveButton icon={ <Icons.MyIcon /> } />
		);
	}
}
```



## Form

The following describes all of the form components available for use in Orchestra.

### `Input`

* __Internal components used:__ `Input.jsx`
* __HTML tag extended:__ `<input />`
* __CSS class(es) used:__ `orch-input orch-secondary`
* __Located at__: `src/components/form/Input.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |
| `error`       | `boolean`     | Puts the input in an error state              |
| `icon`        | `object`      | Icon to use (use orchestra Icons)             |

**Reason for existing:**

The Input is used in conjunction with Insightpool searches.  This component takes all of the usual suspects that regular HTML input tags take.

**Usage:**

```javascript
import {
	Icons,
	Input
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Input defaultValue='Username' icon={ <Icons.SmallUser /> } />
		);
	}
}
```



## Miscellaneous

The following describes all of the miscellaneous components available for use in Orchestra.

### `PillToggle`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-pill-toggle`
* __Located at__: `src/components/misc/PillToggle.jsx`

**Props:**

| Name                 | Type            | Desciption                                                                                     |
| ---------------------|-----------------| -----------------------------------------------------------------------------------------------|
| `item`               | `obj`           | Object of items to render the key of which serves as the value of the item                     |
| `item.active`        | `boolean`       | If item is active it will disable onclick events                                               |
| `item.notifications` | `array`         | Takes count in first index and type in second index                                            |
| `item.value`         | `string|number` | Overrides the item's label as the designated value                                             |
| `onClick`            | `function`      | An onClick event which is bound to the value of an item when clicked                           |

**Reason for existing:**

The PillToggle is used as a button toggler for a series of items for the Insightpool application.

**Usage:**

```javascript
import { APP, PillToggle } from 'orchestra';

class MyComponent extends React.Component {
	onItemClick = (val) => {
		switch (val) {
			case 'A':
				console.log('A!');
				break;
			default:
				console.log('Not A!');
				breal;
		}
	};

	render() {
		const items = {
			A: {
				active: true
			},
			B: {
				active: false,
				notifications: [ 12, APP.ERROR ],
				value: 'foo'
			}
		};

		return (
			<PillToggle items={ items } onClick={ onItemClick }>Hello World!</PillToggle>
		);
	}
}
```


# Commands

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


# Contributing

Please fork this repository to make changes.

Contibuting code to Orchestra requires that a design exist for it.  These designs are usually done by Insightpool's UI designer for the use cases we need.  Once that's complete, you must present an API with how it will work.  This can be done by making a PR to the docs with said component explanation.  No component will be considered unless it's been thoroughly discussed and has underlying documentation.

Once an API has been cleared relevant source code and tests can be added in a PR.  Component must be functionally tested before being merged.

