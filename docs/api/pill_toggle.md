### `PillToggle` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-pill-toggle`
* __Located at__: `src/components/misc/PillToggle.jsx`

**Props:**

| Name                 | Type            | Desciption                                                                                     |
| ---------------------|-----------------| -----------------------------------------------------------------------------------------------|
| `items[ <Object> ]`               | `array`         | Array of object items to render the items to be toggled |
| `item.active`        | `boolean`       | If item is active it will disable onclick events                                               |
| `item.name`          | `string`        | Actual name of the item to be toggled and rendered |
| `item.notifications` | `array`         | Takes count in first index and type in second index                                            |
| `item.value`         | `string|number` | Actual value to send to the `onClick` handler when a item is clicked |
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

