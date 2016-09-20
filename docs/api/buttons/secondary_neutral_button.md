### `SecondaryNeutralButton` !heading

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

