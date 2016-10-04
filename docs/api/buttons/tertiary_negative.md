### `TertiaryNegativeButton (deprecated)` !heading

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

