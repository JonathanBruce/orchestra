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
    * [`FullButton`](#fullbutton)
    * [`PartialButton`](#partialbutton)
    * [`PrimaryButton (deprecated)`](#primarybutton-(deprecated))
    * [`SecondaryButton (deprecated)`](#secondarybutton-(deprecated))
    * [`TertiaryButton (deprecated)`](#tertiarybutton-(deprecated))
  * [Buttons](#buttons)
    * [`BrandButton`](#brandbutton)
    * [`FemaleButton`](#femalebutton)
    * [`FullPrimaryButton`](#fullprimarybutton)
    * [`FullSecondaryButton`](#fullsecondarybutton)
    * [`FullTertiaryButton`](#fulltertiarybutton)
    * [`MaleButton`](#malebutton)
    * [`PartialPrimaryButton`](#partialprimarybutton)
    * [`PartialSecondaryButton`](#partialsecondarybutton)
    * [`PartialTertiaryButton`](#partialtertiarybutton)
    * [`PrimaryNegativeButton (deprecated)`](#primarynegativebutton-(deprecated))
    * [`PrimaryNeutralButton (deprecated)`](#primaryneutralbutton-(deprecated))
    * [`PrimaryPositiveButton (deprecated)`](#primarypositivebutton-(deprecated))
    * [`SecondaryNeutralButton (deprecated)`](#secondaryneutralbutton-(deprecated))
    * [`SecondaryPositiveButton (deprecated)`](#secondarypositivebutton-(deprecated))
    * [`TertiaryNegativeButton (deprecated)`](#tertiarynegativebutton-(deprecated))
    * [`TertiaryNeutralButton (deprecated)`](#tertiaryneutralbutton-(deprecated))
    * [`TertiaryPositiveButton (deprecated)`](#tertiarypositivebutton-(deprecated))
  * [Form](#form)
    * [`Input`](#input)
    * [`CheckBox`](#checkbox)
    * [`DropDown`](#dropdown)
    * [`Slider`](#slider)
    * [`Range`](#range)
    * [`Switch`](#switch)
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
    * [`Avatar`](#avatar)
    * [`Content`](#content)
    * [`EarnedMediaStat`](#earnedmediastat)
    * [`Info`](#info)
    * [`Notifier`](#notifier)
    * [`PaginationApprove`](#paginationapprove)
    * [`PaginationControls`](#paginationcontrols)
    * [`PillToggle`](#pilltoggle)
    * [`Stat`](#stat)
  * [Search](#search)
    * [`FilterBox`](#filterbox)
    * [`HighlightTag`](#highlighttag)
    * [`KeywordTag`](#keywordtag)
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

### `FullButton`

* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-full`
* __Located at__: `src/components/base/FullButton.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The FullButton is used as a base for primary buttons internally to build more complex buttons for the Insightpool application.


### `PartialButton`

* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-partial`
* __Located at__: `src/components/base/PartialButton.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The PartialButton is used as a base for partial buttons internally to build more complex buttons for the Insightpool application.


### `PrimaryButton (deprecated)`

* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-primary`
* __Located at__: `src/components/base/PrimaryButton.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The PrimaryButton is used as a base for primary buttons internally to build more complex buttons for the Insightpool application.


### `SecondaryButton (deprecated)`

* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-secondary`
* __Located at__: `src/components/base/SecondaryButton.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The SecondaryButton is used as a base for secondary buttons internally to build more complex buttons for the Insightpool application.


### `TertiaryButton (deprecated)`

* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-tertiary`
* __Located at__: `src/components/base/TertiaryButton.jsx`

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


### `FullPrimaryButton`

* __Internal components used:__ `PrimaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-full`, `primary`
* __Located at__: `src/components/buttons/FullPrimary.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The FullPrimaryButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import { FullPrimaryButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<FullPrimaryButton>Hello World!</FullPrimaryButton>
		);
	}
}
```


### `FullSecondaryButton`

* __Internal components used:__ `FullButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-full`, `secondary`
* __Located at__: `src/components/buttons/FullSecondary.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The FullSecondaryButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import { FullSecondaryButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<FullSecondaryButton>Hello World!</FullSecondaryButton>
		);
	}
}
```


### `FullTertiaryButton`

* __Internal components used:__ `FullButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-full`, `tertiary`
* __Located at__: `src/components/buttons/FullTertiary.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The FullTertiaryButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import { FullTertiaryButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<FullTertiaryButton>Hello World!</FullTertiaryButton>
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


### `PartialPrimaryButton`

* __Internal components used:__ `PartialButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-partial`, `primary`
* __Located at__: `src/components/buttons/PartialPrimary.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The PartialPrimaryButton is used in various places in the Insightpool application.

**Usage:**

The `children` you pass to this compnent is expected to be a React element.  The use case in the example below is an icon, which is what this component was made for.

```javascript
import {
	Icons,
	PartialPrimaryButton
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<PartialPrimaryButton><Icons.MyIcon /></PartialPrimaryButton />
		);
	}
}
```


### `PartialSecondaryButton`

* __Internal components used:__ `PartialButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-partial`, `secondary`
* __Located at__: `src/components/buttons/PartialSecondary.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The PartialSecondaryButton is used in various places in the Insightpool application.

**Usage:**

The `children` you pass to this compnent is expected to be a React element.  The use case in the example below is an icon, which is what this component was made for.

```javascript
import {
	Icons,
	PartialSecondaryButton
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<PartialSecondaryButton><Icons.MyIcon /></PartialSecondaryButton />
		);
	}
}
```


### `PartialTertiaryButton`

* __Internal components used:__ `PartialButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-partial`, `tertiary`
* __Located at__: `src/components/buttons/PartialTertiary.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The PartialTertiaryButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import {
	Icons,
	PartialTertiaryButton
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<PartialTertiaryButton><Icons.MyIcon /></PartialTertiaryButton />
		);
	}
}
```
### `PrimaryNegativeButton (deprecated)`

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


### `PrimaryNeutralButton (deprecated)`

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
### `PrimaryPositiveButton (deprecated)`

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


### `SecondaryNeutralButton (deprecated)`

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


### `SecondaryPositiveButton (deprecated)`

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


### `TertiaryNegativeButton (deprecated)`

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
			<TertiaryNegativeButton><Icons.MyIcon /></TertiaryNegativeButton>
		);
	}
}
```


### `TertiaryNeutralButton (deprecated)`

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
			<TertiaryNeutralButton><Icons.MyIcon /></TertiaryNeutralButton />
		);
	}
}
```


### `TertiaryPositiveButton (deprecated)`

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
			<TertiaryPositiveButton><Icons.MyIcon /></TertiaryPositiveButton />
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
			<Input
				defaultValue='Username'
				icon={ <Icons.SmallUser /> } />
		);
	}
}
```


### `CheckBox`

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
			<Checkbox
				checked 
				onClick={
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

### `Slider`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-slider`
* __Located at__: `src/components/form/Slider.jsx`

**Props:**

| Name                 | Type            | Desciption                                                                                                                                |
|----------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `defaultValue`       | `number`        | Value which is currently set. Will need to be update `onChange` handler.                                                                  |
| `disabled`           | `boolean`       | Boolean which determines the availability of the slider. Defaults to `false`.                                                             |
| `interval`           | `number`        | Number representing the ticking gap when incrementing/decrementing the value of the slider                                                |
| `label`              | `string`        | String value representing the display label value of the slider                                                                           |
| `max`                | `number`        | Number representing the highest value the slider can reach.                                                                               |
| `min`                | `number`        | Number representing the lowest value the slider can reach.                                                                                |
| `onDragChange`       | `function`      | A function which is called when the slider is dragged. The value that slider is pointing to will be passed down.                          |
| `onDragEnd`          | `function`      | A function that is called when user lets go of the slider. The value of the position where slider ended will be passed down.              |
| `onDragStart`        | `function`      | A function that is called when user initiates the drag of the slider. The value of the position where slider started will be passed down. |
| `width`              | `number`        | Number representing the width of the slider.                                                                                              |

**States:**
| Name                 | Type            | Desciption                                                                                                                                |
|----------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `drag`               | `boolean`       | Boolean determining if it is able to drag or not                                                                                          |

**Reason for existing**

The Slider is used for users to have an easy way selecting a range of number values. 

**Usage:**

```javascript
import { Slider } from 'orchestra';
import { INTERVAL, MIN_VALUE, MAX_VALUE } from 'EXAMPLE_CONSTANT';

class MyComponent extends React.Component {
	onChange = (value) => {
		console.log(value);
	};
	
	onDragStart = (value) => {
		console.log('drag started', value);
	};
	
	onDragEnd = (value) => {
		console.log('drag ended', value);
	};
	
	render() {
		const { value } = this.props;
		
		return (
			<Slider
				defaultValue={ value }
				interval={ INTERVAL }
				max={ MAX_VALUE }
				min={ MIN_VALUE }
				onChange={ this.onChange }  
				onDragEnd={ this.onDragEnd }  
				onDragStart={ this.onDragStart } />  
		);
	}
}
```
### `Range`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-range-slider`
* __Located at__: `src/components/form/RangeSlider.jsx`

**Props:**

| Name                 | Type            | Desciption                                                                                                                                |
|----------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `disabled`           | `boolean`       | Boolean which determines the availability of the slider. Defaults to `false`.                                                               |
| `interval`           | `number`        | Number representing the ticking gap when incrementing/decrementing the value of the slider                                             |
| `max`                | `number`        | Number representing the highest value the slider can reach.                                                                                 |
| `maxDisplay`         | `string `       | Display value for the right slider, displayed when at rest.                                                                                 |
| `maxLabel`           | `string`        | String value label right of the slider to inform the user of maximum value                                                                  |
| `maxValue`           | `string `       | Real value for the right slider, displayed during value manipulation.                                                                       |
| `min`                | `number`        | Number representing the lowest value the slider can reach.                                                                                  |
| `minDisplay`         | `string `       | Display value for the left slider, displayed when at rest.                                                                                  |
| `minLabel`           | `string`        | String value label left of the slider to inform the user of minimum value                                                                   |
| `minValue`           | `string `       | Real value for the left slider, displayed during value manipulation.                                                                        |
| `onDragChange`       | `function`      | A function which is called when the slider is dragged. The value that slider is pointing to will be passed down.                            |
| `onDragEnd`          | `function`      | A function that is called when user lets go of the slider. The value of the position where slider ended will be passed down.            |
| `onDragStart`        | `function`      | A function that is called when user initiates the drag of the slider. The value of the position where slider started will be passed down. |
| `width`              | `number`        | Number representing the width of the slider.                                                                                                |

**States:**
| Name                 | Type            | Desciption                                                                                                                                |
|----------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `drag`               | `boolean`       | Boolean determining if it is able to drag or not                                                                                          |

**Reason for existing**

The range slider is to allow for interpolation between two values that should be constrained by each other but also a maximum and minimum. 

**Usage:**

```javascript
import { RangeSlider } from 'orchestra';

class MyComponent extends React.Component {
	onChange = (value) => {
		console.log(value);
	};
	
	onDragStart = (value) => {
		console.log('drag started', value);
	};
	
	onDragEnd = (value) => {
		console.log('drag ended', value);
	};
	
	render() {
		const { left, right } = this.props;
		
		return (
			<RangeSlider
				interval={ 1 }
				max={ 0 }
				maxValue={ right } 
				min={ 10 }
				minValue={ left }
				onChange={ this.onChange }  
				onDragEnd={ this.onDragEnd }  
				onDragStart={ this.onDragStart } />  
		);
	}
}
```
### `Switch`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-Switch`
* __Located at__: `src/components/form/Switch.jsx`

**Props:**

| Name                 | Type            | Desciption                                                                                     |
| ---------------------|-----------------| -----------------------------------------------------------------------------------------------|
| `active`             | `boolean`       | Boolean which determines whether the Switch list is active or not                             |
| `onClick(val)`       | `function`      | What to do on a click, bool provided                                  |

**Reason for existing:**

The Switch is used for switches around the application.

**Usage:**

```javascript
import { Switch } from 'orchestra';

class MyComponent extends React.Component {
	onClick = (value) => {
		console.log(value);
	};
	
	render() {
		const { active } = this.props;

		return (
			<Switch 
				active
				onClick={ this.onClick } />
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
			<Container
				items={ items }
				onClick={ onItemClick }>
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

### `Avatar`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-avatar`
* __Located at__: `src/components/misc/Avatar.jsx`

**Props:**

| Name                 | Type            | Desciption                                                 |
| ---------------------|-----------------|------------------------------------------------------------|
| `image`              | `string`        | Image URL                                                  |
| `size`               | `numnber`       | Size of avatar, will be applied to height and width        |

**Reason for existing:**

The Avatar is used to display avatars or a default avatar for the Insightpool application.

**Usage:**

```javascript
import { Avatar } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Avatar
				image='http://www.insightpool.com/user.jpg'
				size={ 64 } />
		);
	}
}
```


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
			<Content
				icon={ <Icons.Links /> }
				onScrollBottom={ this.action() }
				title='My Content'
				widget={ this.renderButton() }>
				Hello, this is my content!
			</Content>
		);
	}
}
```


### `EarnedMediaStat`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-earned-media-stat`
* __Located at__: `src/components/misc/EarnedMediaStat.jsx`

**Props:**

| Name              | Type          | Description                                   |
| ------------------|---------------| ----------------------------------------------|
| `icon`            | `object`      | Icon for earned media stat                    |
| `amount`          | `string`      | Dollar amount of media earned                 |
| `title`           | `string`      | Title the statistical value                   |
| `number`          | `number`      | Statistical value of media earned             |

**Reason for existing:**

This component is used for various pieces of content around the site representing earned media values.

**Usage:**

```javascript
import { Content, Icons } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<EarnedMediaStat
				icon={ <Icons.Impressions /> }
				amount={ '$1.00' }
				title='Impressions'
				number={ 1 } />
		);
	}
}
```


### `Info`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-info`
* __Located at__: `src/components/misc/Info.jsx`

**Props:**

| Name              | Type          | Desciption                                    |
| ------------------|---------------| ----------------------------------------------|
| `title`           | `string`      | Title of the tooltip                          |
| `value`           | `string`      | String content to be rendered                 |

**Reason for existing:**

This component is used for displaying a toggleable information tooltip

**Usage:**

```javascript
import { Info } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Info
				title={ 'Tooltip' }
				value={ 'This is an information window' } />
		);
	}
}
```


### `Notifier`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-notifier`
* __Located at__: `src/components/misc/Notifier.jsx`

**Props:**

| Name                   | Type               | Desciption                                                 |
| -----------------------|--------------------|------------------------------------------------------------|
| `disabled`             | `boolean`          | Boolean to indicate if the callout is disabled             |
| `icon`                 | `Component`        | Icon for notifier's display                                |
| `active`               | `boolean`          | Boolean to indicate if notifier has been toggled active    |
| `onClick`              | `function`         | Function to call when the callout is clicked               |
| `value`                | `number`           | Number of outstanding items to notify                      |

**Reason for existing:**

The Notifier is used in Search and Segment sidebar to trigger the advance search modal

**Usage:**

```javascript
import { Notifier, Icons } from 'orchestra';

class MyComponent extends React.Component {
	onClick = () => {
		console.log('clicked');
	};

	render() {
		return (
			<Notifier
				active={ true }
				icon={ <Icons.ExampleIcon /> }
				onClick={ this.onClick }
				value={ 3 } />
		);
	}
}
```


### `PaginationApprove`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-pagination-approve`
* __Located at__: `src/components/misc/PaginationApprove.jsx`

**Props:**

| Name                 | Type            | Desciption                                                 |
| ---------------------|-----------------|------------------------------------------------------------|
| `approvedDisabled`   | `boolean`       | To disable approval button                                 |
| `onApprovalClick`    | `function`      | Function to call when approval is clicked                  |
| `currentPage`        | `number|string` | Current page of results                                    |
| `onDecreaseClick`    | `function`      | Function to call when decrease is clicked                  |
| `onIncreaseClick`    | `function`      | Function to call when increase is clicked                  |
| `decreaseDisabled`   | `boolean`       | To disable decrease button i.e. at first page of results   |
| `increaseDisabled`   | `boolean`       | To disable decrease button i.e. at last page of results    |
| `totalPages`         | `number|string` | Total pages of results                                     |

**Reason for existing:**

The PaginationApprove is used to go through pages of results and approve pages of results for the Insightpool application.

**Usage:**

```javascript
import { PaginationApprove } from 'orchestra';

class MyComponent extends React.Component {
	onApprovalClick = () => {
		console.log('approve');
	};

	onDecreaseClick = () => {
		console.log('decrease');
	};

	onIncreaseClick = () => {
		console.log('increase');
	};

	render() {
		return (
			<PaginationApprove
				currentPage={ 5 }
				onApprovalClick={ this.onApprovalClick }
				onDecreaseClick={ this.onDecreaseClick }
				onIncreaseClick={ this.onIncreaseClick }
				totalPages={ 10 } />
		);
	}
}
```


### `PaginationControls`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-pagination-controls`
* __Located at__: `src/components/misc/PaginationControls.jsx`

**Props:**

| Name                 | Type            | Desciption                                                 |
| ---------------------|-----------------|------------------------------------------------------------|
| `onDecreaseClick`    | `function`      | Function to call when decrease is clicked                  |
| `onIncreaseClick`    | `function`      | Function to call when increase is clicked                  |
| `decreaseDisabled`   | `boolean`       | To disable decrease button i.e. at first page of results   |
| `increaseDisabled`   | `boolean`       | To disable decrease button i.e. at last page of results    |

**Reason for existing:**

The PaginationControls is used to go through pages of results for the Insightpool application.

**Usage:**

```javascript
import { PaginationControls } from 'orchestra';

class MyComponent extends React.Component {
	onDecreaseClick = () => {
		console.log('decrease');
	};

	onIncreaseClick = () => {
		console.log('increase');
	};

	render() {
		return (
			<PaginationControls
				onDecreaseClick={ this.onDecreaseClick }
				onIncreaseClick={ this.onIncreaseClick } />
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
			<PillToggle
				items={ items }
				onClick={ onItemClick }>
				Hello World!
			</PillToggle>
		);
	}
}
```


### `Stat`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-stat`
* __Located at__: `src/components/misc/Stat.jsx`

**Props:**

| Name                 | Type            | Desciption                                                 |
| ---------------------|-----------------|------------------------------------------------------------|
| `name`               | `string`        | Name of stat                                               |
| `number`             | `numnber|string`| Value of stat                                              |
| `widgets`            | `array|element` | Widgets to put into statbox                                |

**Reason for existing:**

The Stat is used to display different stats for the Insightpool application.

**Usage:**

```javascript
import { Stat } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Stat
				name='Stat'
				number={ 100000 } />
		);
	}
}
```



## Search

The following describes all of the search components available for use in Orchestra.

### `FilterBox`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-filter-box`
* __Located at__: `src/components/search/FilterBox.jsx`

**Props:**

| Name              | Type          | Desciption                                    |
| ------------------|---------------| ----------------------------------------------|
| `children`        | `element`     | Dynamic content to be rendered                |
| `onWidgetToggle`  | `function`    | Action to fire when expand is selected        |
| `title`           | `string`      | Title of the filter box                       |
| `titleIcon`       | `element`     | Optional filter box title icon                |
| `tooltipTitle`    | `element`     | Optional tooltip title                        |
| `tooltipValue`    | `element`     | Optional tooltip value                        |
| `widget`          | `object`      | Flyout widget                                 |
| `widgetIcon`      | `object`      | Icon for for the expand button                |
| `widgetOpen`      | `boolean`     | Represents whether the flyout is expanded     |

**Default Props:**

| Name              | Default Value      |
| ------------------|--------------------|
| `widgetIcon`      | <Icons.Search />   |

**Reason for existing:**

This component is used for containing an expanding list of filters or other dynamic content, and supports an optional info tooltip and toggleable widget component.

**Usage:**

```javascript
import { FilterBox, Icons } from 'orchestra';

class MyComponent extends React.Component {
	toggleSearchOverlay = () => {
		// ...
	}

	render() {
		return (
			<FilterBox
				info={ 'This is a description of the filter topics' }
				title='Filter Topics'
				titleIcon={ <Icons.Instagram /> }
				tooltipTitle={ 'Tooltip Title' }
				tooltipValue={ 'Descriptive Instructions' }
				widget={ <SearchOverlay /> }
				widgetIcon={ <Icons.Search /> }
				widgetOpen={ true }
				widgetToggle={ this.toggleSearchOverlay }>
				{ this.props.children }
			</FilterBox>
		);
	}
}
```


### `HighlightTag`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-highlight-tag`
* __Located at__: `src/components/search/HighlightTag.jsx`

**Props:**

| Name              | Type          | Desciption                                    |
| ------------------|---------------| ----------------------------------------------|
| `label`           | `element`     | Tag label to be displayed                     |
| `onClose`         | `function`    | Action to fire when X button is clicked       |


**Reason for existing:**

This component is used for displaying a removeable highlight tag which can be displayed in place of text inputs.

**Usage:**

```javascript
import { HighlightTag } from 'orchestra';

class MyComponent extends React.Component {
	onCloseHighlightTag = () => {
		// ...
	}

	render() {
		return (
			<FilterBox
				label='Sports'
				onClose={ this.onCloseHighlightTag }>
			</FilterBox>
		);
	}
}
```


### `KeywordTag`

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-keyword-tag`
* __Located at__: `src/components/search/KeywordTag.jsx`

**Props:**

| Name                 | Type            | Desciption                                                  |
| ---------------------|-----------------|-------------------------------------------------------------|
| `disabled`           | `bool`          | Represents whether the tag should be disabled               |
| `editable`           | `bool`          | Represents whether a tag should be editable                 |
| `id`                 | `string`        | ID of follower                                              |
| `invalid`            | `boolean`       | Boolean for whether the input value is invalid              |
| `onEditToggle`       | `func`          | Function for additional callbacks while editmode is toggled |
| `onDeleteClick`      | `func`          | Function for deleting the keyword tag                       |
| `onEmptyClick`       | `func`          | Function for when the tag is empty                          |
| `network`            | `string`        | Value for current network                                   |
| `networks`           | `array`         | Array of networks for network options                       |
| `onNetworkChange`    | `func`          | Function for changing network in network menu               |
| `onNetworkToggle`    | `func`          | Function for toggling the network menu open or closed       |
| `openNetwork`        | `boolean`       | Boolean for whether the network menu should be open         |
| `onOptionsChange`    | `func`          | Function for changing values in keyword options menu        |
| `onOptionsToggle`    | `func`          | Function for toggling values in keyword options menu        |
| `openOptions`        | `boolean`       | Boolean for whether the options menu should be open         |
| `onPreviewClick`     | `func`          | Function for clicking a preview tag                         |
| `onRequirementChange`| `func`          | Function for changing network in network menu               |
| `onRequirementToggle`| `func`          | Function for toggling the requirement menu open or closed   |
| `openRequirement`    | `boolean`       | Boolean for whether the requirement menu should be open     |
| `onTagChange`        | `func`          | Function for changing tag value                             |
| `options`            | `array`         | Array of objects containing `label` and `value`             |
| `preview`            | `boolean`       | Represents whether the tag is in preview mode               |
| `requirement`        | `string`        | Value for current requirement                               |
| `selected`           | `boolean`       | Boolean for whether the selected visual state is active     |
| `thumbnail`          | `string`        | source url for thumbnail tags, fallback available for error |
| `value`              | `string`        | Value for keyword tag                                       |

**Reason for existing:**

The KeywordTag is used to display keyword tags for the Insightpool application.

**Usage:**

```javascript
import { KeywordTag } from 'orchestra';
import { ALL_NETWORKS, REQUIREMENTS } from 'sheet-music';

class MyComponent extends React.Component {
	render() {
		return (
			<KeywordTag
				id='2929392'
				disabled={ false }
				invalid={ false }
				network={ ALL_NETWORKS.TWITTER }
				networks={ [ ALL_NETWORKS.TWITTER ] }
				preview={ false }
				requirement={ REQUIREMENTS.NEUTRAL }
				onEditToggle={
				    (edit) => {
				        console.log(edit);
				    }
				}
				onNetworkChange={
					(network) => {
						console.log(network);
					}
				}
				onTagChange={
					(value) => {
						console.log(value);
					}
				}
				onTagInputChange = {
				    (value) => {
				        console.log(value);
				    }
				} />
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

