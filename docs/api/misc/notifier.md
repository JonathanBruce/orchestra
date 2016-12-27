### `Notifier` !heading

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

