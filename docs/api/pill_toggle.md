### `PillToggle` !heading

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

