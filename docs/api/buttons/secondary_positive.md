### `SecondaryPositiveButton (deprecated)` !heading

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

