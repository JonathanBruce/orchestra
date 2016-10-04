### `TertiaryPositiveButton (deprecated)` !heading

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

