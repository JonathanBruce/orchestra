### `TertiaryNeutralButton` !heading

* __Internal components used:__ `TertiaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `tertiary`, `negative`
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

