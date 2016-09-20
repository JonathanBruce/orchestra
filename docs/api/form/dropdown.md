### `DropDown` !heading

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
