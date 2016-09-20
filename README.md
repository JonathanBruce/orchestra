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
    * [`Checkbox`](#checkbox)
    * [`DropDown`](#dropdown)
  * [Grid](#grid)
    * [`Container`](#container)
    * [`One`](#one)
    * [`Two`](#two)
    * [`Three`](#three)
    * [`Four`](#four)
    * [`Five`](#five)
    * [`Six`](#six)
    * [`Seven`](#seven)
    * [`Eight`](#eight)
    * [`Nine`](#nine)
    * [`Ten`](#ten)
    * [`Eleven`](#eleven)
    * [`Twelve`](#twelve)
  * [Miscellaneous](#miscellaneous)
    * [`Content`](#content)
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
* To run selenium on Safari, you will need to install the `SafariDriver` which you can find [here](http://selenium-release.storage.googleapis.com/index.html?path=2.45/)
* Once the npm package is installed, install `selenium-standalone` with `selenium-standalone install`
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

* __HTML tag extended:__ `<input type='text' />`
* __CSS class(es) used:__ `orch-input orch-secondary`
* __Located at__: `src/components/form/Input.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |
| `error`       | `boolean`     | Puts the input in an error state              |
| `icon`        | `object`      | Icon to use (use orchestra Icons)             |

**Reason for existing:**

This component takes all of the usual suspects that regular HTML input tags take.

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


### `Checkbox`

* __HTML tag extended:__ `<input type='checkbox' />`
* __CSS class(es) used:__ `orch-checkbox`
* __Located at__: `src/components/form/Checkbox.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `checked`     | `boolean`     | For initial checked state                     |
| `disabled`    | `boolean`     | Disables the component                        |
| `onClick(val)`| `function`    | What to do on a click, bool provided          |

**Reason for existing:**

This component takes all of the usual suspects that regular HTML checkbox tags take.

**Usage:**

```javascript
import { Checkbox } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Checkbox checked onClick={
				(val) => {
					console.log('hello world!')
				}
			} />
		);
	}
}
```


### `DropDown`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-dropdown`
* __Located at__: `src/components/form/DropDown.jsx`

**Props:**

| Name                 | Type            | Desciption                                                                                     |
| ---------------------|-----------------| -----------------------------------------------------------------------------------------------|
| `active`             | `boolean`       | Boolean which determines whether the dropdown list is shown or not                             |
| `disabled`           | `boolean`       | Boolean which determines whether the component is disabled or not                              |
| `options[ <Object> ]`| `array`         | Array of object options to render the options in the dropdown                                  |
| `option.label`       | `string`        | Actual label of the item to be toggled and rendered                                            |
| `option.value`       | `any`           | Actual value to send to the `onChange` handler when an item is selected                        |
| `label`              | `string`        | Label for the DropDown. Default is the label of the currently selected option                  |
| `onChange(val)`      | `function`      | An onChange event which is bound to the value of an item when selected, val provided           |
| `onToggle`           | `function`      | A function which is called when the dropdown list is toggled.                                  |
| `selected`           | `any`           | Value which is currently selected. Will need to be updated in `onChange` handler               |

**Reason for existing:**

The DropDown is used for dropdown lists of selectable options.

**Usage:**

```javascript
import { DropDown } from 'orchestra';

class MyComponent extends React.Component {
	onChange = (value) => {
		console.log(value);
	};
	
	onToggle = () => {
		console.log('toggled');
	};
	
	render() {
		const { selected } = this.props;
		const options = [
			{ label: 'one', value: 1 },
			{ label: 'two', value: 2 }
		];

		return (
			<DropDown 
				label='two'
				onChange={ this.onChange }
				options={ options } 
				selected={ selected } />
		);
	}
}
```


## Grid

The following describes all of the form components available for use in Orchestra.

### `Container`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-container`
* __Located at__: `src/components/grid/Container.jsx`

**Props:**

| Name                 | Type            | Desciption                                                                                     |
| ---------------------|-----------------| -----------------------------------------------------------------------------------------------|
| `className`          | `array`         | Array of object items to render the items to be toggled                                        |
| `children`           | `boolean`       | If item is active it will disable onclick events                                               |

**Reason for existing:**

The Container is used for laying out grids for the Insightpool application.  This takes grids that add up to 12.

**Usage:**

```javascript
import { Container, Six } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Container items={ items } onClick={ onItemClick }>
				<Six />
				<Six />
			</Container>
		);
	}
}
```


### `One`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `grid-1`
* __Located at__: `src/components/grid/One.jsx`

**Props:**

| Name                 | Type                         | Desciption                                                                                     |
| ---------------------|------------------------------|----------------------------------------------|
| `children`           | `array|element|string`       | Content for the grid                          |
| `alpha`              | `boolean`                    | Add if first grid of nested grid              |
| `omega`              | `boolean`                    | Add if last grid of nested grid for the grid  |

**Reason for existing:**

One is used for laying out grids for the Insightpool application.

**Usage:**

```javascript
import {
	Container,
	Eleven,
	One
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Container>
				<Eleven>Content</Eleven>
				<One>Content</One>
			</Container>
		);
	}
}
```


### `Two`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `grid-2`
* __Located at__: `src/components/grid/Two.jsx`

**Props:**

| Name                 | Type                         | Desciption                                                                                     |
| ---------------------|------------------------------|----------------------------------------------|
| `children`           | `array|element|string`       | Content for the grid                          |
| `alpha`              | `boolean`                    | Add if first grid of nested grid              |
| `omega`              | `boolean`                    | Add if last grid of nested grid for the grid  |

**Reason for existing:**

Two is used for laying out grids for the Insightpool application.

**Usage:**

```javascript
import {
	Container,
	Ten,
	Two
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Container>
				<Ten>Content</Ten>
				<Two>Content</Two>
			</Container>
		);
	}
}
```


### `Three`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `grid-3`
* __Located at__: `src/components/grid/Three.jsx`

**Props:**

| Name                 | Type                         | Desciption                                                                                     |
| ---------------------|------------------------------|----------------------------------------------|
| `children`           | `array|element|string`       | Content for the grid                          |
| `alpha`              | `boolean`                    | Add if first grid of nested grid              |
| `omega`              | `boolean`                    | Add if last grid of nested grid for the grid  |

**Reason for existing:**

Three is used for laying out grids for the Insightpool application.

**Usage:**

```javascript
import {
	Container,
	Nine,
	Three
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Container>
				<Three>Content</Three>
				<Nine>Content</Nine>
			</Container>
		);
	}
}
```


### `Four`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `grid-4`
* __Located at__: `src/components/grid/Four.jsx`

**Props:**

| Name                 | Type                         | Desciption                                                                                     |
| ---------------------|------------------------------|----------------------------------------------|
| `children`           | `array|element|string`       | Content for the grid                          |
| `alpha`              | `boolean`                    | Add if first grid of nested grid              |
| `omega`              | `boolean`                    | Add if last grid of nested grid for the grid  |

**Reason for existing:**

Four is used for laying out grids for the Insightpool application.

**Usage:**

```javascript
import {
	Container,
	Eight,
	Four
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Container>
				<Four>Content</Four>
				<Eight>Content</Eight>
			</Container>
		);
	}
}
```


### `Five`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `grid-5`
* __Located at__: `src/components/grid/Five.jsx`

**Props:**

| Name                 | Type                         | Desciption                                                                                     |
| ---------------------|------------------------------|----------------------------------------------|
| `children`           | `array|element|string`       | Content for the grid                          |
| `alpha`              | `boolean`                    | Add if first grid of nested grid              |
| `omega`              | `boolean`                    | Add if last grid of nested grid for the grid  |

**Reason for existing:**

Five is used for laying out grids for the Insightpool application.

**Usage:**

```javascript
import {
	Container,
	Five,
	Seven
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Container>
				<Five>Content</Five>
				<Seven>Content</Seven>
			</Container>
		);
	}
}
```


### `Six`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `grid-6`
* __Located at__: `src/components/grid/Six.jsx`

**Props:**

| Name                 | Type                         | Desciption                                                                                     |
| ---------------------|------------------------------|----------------------------------------------|
| `children`           | `array|element|string`       | Content for the grid                          |
| `alpha`              | `boolean`                    | Add if first grid of nested grid              |
| `omega`              | `boolean`                    | Add if last grid of nested grid for the grid  |

**Reason for existing:**

Six is used for laying out grids for the Insightpool application.

**Usage:**

```javascript
import {
	Container,
	Six
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Container>
				<Six>Content</Six>
				<Six>Content</Six>
			</Container>
		);
	}
}
```


### `Seven`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `grid-7`
* __Located at__: `src/components/grid/Seven.jsx`

**Props:**

| Name                 | Type                         | Desciption                                                                                     |
| ---------------------|------------------------------|----------------------------------------------|
| `children`           | `array|element|string`       | Content for the grid                          |
| `alpha`              | `boolean`                    | Add if first grid of nested grid              |
| `omega`              | `boolean`                    | Add if last grid of nested grid for the grid  |

**Reason for existing:**

Seven is used for laying out grids for the Insightpool application.

**Usage:**

```javascript
import {
	Container,
	Five,
	Seven
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Container>
				<Seven>Content</Seven>
				<Five>Content</Five>
			</Container>
		);
	}
}
```


### `Eight`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `grid-8`
* __Located at__: `src/components/grid/Eight.jsx`

**Props:**

| Name                 | Type                         | Desciption                                                                                     |
| ---------------------|------------------------------|----------------------------------------------|
| `children`           | `array|element|string`       | Content for the grid                          |
| `alpha`              | `boolean`                    | Add if first grid of nested grid              |
| `omega`              | `boolean`                    | Add if last grid of nested grid for the grid  |

**Reason for existing:**

Eight is used for laying out grids for the Insightpool application.

**Usage:**

```javascript
import {
	Container,
	Four,
	Eight
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Container>
				<Eight>Content</Eleven>
				<Four>Content</Eleven>
			</Container>
		);
	}
}
```


### `Nine`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `grid-9`
* __Located at__: `src/components/grid/Nine.jsx`

**Props:**

| Name                 | Type                         | Desciption                                                                                     |
| ---------------------|------------------------------|----------------------------------------------|
| `children`           | `array|element|string`       | Content for the grid                          |
| `alpha`              | `boolean`                    | Add if first grid of nested grid              |
| `omega`              | `boolean`                    | Add if last grid of nested grid for the grid  |

**Reason for existing:**

Nine is used for laying out grids for the Insightpool application.

**Usage:**

```javascript
import {
	Container,
	Nine,
	Three
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Container>
				<Nine>Content</Nine>
				<Three>Content</Three>
			</Container>
		);
	}
}
```


### `Ten`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `grid-10`
* __Located at__: `src/components/grid/Ten.jsx`

**Props:**

| Name                 | Type                         | Desciption                                                                                     |
| ---------------------|------------------------------|----------------------------------------------|
| `children`           | `array|element|string`       | Content for the grid                          |
| `alpha`              | `boolean`                    | Add if first grid of nested grid              |
| `omega`              | `boolean`                    | Add if last grid of nested grid for the grid  |

**Reason for existing:**

Ten is used for laying out grids for the Insightpool application.

**Usage:**

```javascript
import {
	Container,
	Ten,
	Two
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Container>
				<Ten>Content</Ten>
				<Two>Content</Two>
			</Container>
		);
	}
}
```


### `Eleven`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `grid-11`
* __Located at__: `src/components/grid/Eleven.jsx`

**Props:**

| Name                 | Type                         | Desciption                                                                                     |
| ---------------------|------------------------------|----------------------------------------------|
| `children`           | `array|element|string`       | Content for the grid                          |
| `alpha`              | `boolean`                    | Add if first grid of nested grid              |
| `omega`              | `boolean`                    | Add if last grid of nested grid for the grid  |

**Reason for existing:**

Eleven is used for laying out grids for the Insightpool application.

**Usage:**

```javascript
import {
	Container,
	One,
	Eleven
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Container>
				<Eleven>Content</Eleven>
				<One>Content</Eleven>
			</Container>
		);
	}
}
```


### `Twelve`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `grid-12`
* __Located at__: `src/components/grid/Twelve.jsx`

**Props:**

| Name                 | Type                         | Desciption                                                                                     |
| ---------------------|------------------------------|----------------------------------------------|
| `children`           | `array|element|string`       | Content for the grid                          |
| `alpha`              | `boolean`                    | Add if first grid of nested grid              |
| `omega`              | `boolean`                    | Add if last grid of nested grid for the grid  |

**Reason for existing:**

Twelve is used for laying out grids for the Insightpool application.

**Usage:**

```javascript
import {
	Container,
	Twelve
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Container>
				<Twelve>Content</Twelve>
			</Container>
		);
	}
}
```



## Miscellaneous

The following describes all of the miscellaneous components available for use in Orchestra.

### `Content`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-content`
* __Located at__: `src/components/misc/Content.jsx`

**Props:**

| Name              | Type          | Desciption                                    |
| ------------------|---------------| ----------------------------------------------|
| `icon`            | `object`      | Icon for content block                        |
| `onScrollBottom`  | `function`    | Action to fire when scrolled to the bottom    |
| `subHeader`       | `string`      | Sub header of content block if applicable     |
| `title`           | `string`      | Title of the content block                    |
| `widget`          | `object`      | Widget for the content block                  |

**Reason for existing:**

This component is used for various pieces of content around the site.

**Usage:**

```javascript
import { Content, Icons } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Content icon={ <Icons.Links /> }
				onScrollBottom={ this.action() }
				title='My Content'
				widget={ this.renderButton() }>
				Hello, this is my content!
			</Content>
		);
	}
}
```


### `PillToggle`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-pill-toggle`
* __Located at__: `src/components/misc/PillToggle.jsx`

**Props:**

| Name                 | Type            | Desciption                                                                                     |
| ---------------------|-----------------| -----------------------------------------------------------------------------------------------|
| `items[ <Object> ]`  | `array`         | Array of object items to render the items to be toggled                                        |
| `item.active`        | `boolean`       | If item is active it will disable onclick events                                               |
| `item.label`         | `string`        | Actual label of the item to be toggled and rendered                                            |
| `item.notifications` | `array`         | Takes count in first index and type in second index                                            |
| `item.value`         | `string|number` | Actual value to send to the `onClick` handler when a item is clicked                           |
| `onClick`            | `function`      | An onClick event which is bound to the value of an item when clicked                           |

**Reason for existing:**

The PillToggle is used as a button toggler for a series of items for the Insightpool application.

**Usage:**

```javascript
import { APP, PillToggle } from 'orchestra';

class MyComponent extends React.Component {
	onItemClick = (val) => {
		switch (val) {
			case 'a':
				console.log('a!');
				break;
			default:
				console.log('Not a!');
				break;
		}
	};

	render() {
		const items = [
			{
				active: true,
				name: 'A',
				value: 'a'
			},
			{
				active: false,
				name: 'B',
				notifications: [ 12, APP.ERROR ],
				value: 'b'
			}
		];

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

