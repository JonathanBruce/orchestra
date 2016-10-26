### `Switch` !heading

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
