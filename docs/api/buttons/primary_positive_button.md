### `PrimaryPositiveButton` !heading

* __Internal components used:__ `PrimaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-primary`, `orch-positive`
* __Located at__: `src/components/buttons/PrimaryPositive.jsx`

**Props:**

| Name          | Type                        | Desciption                                    |
| ------------- |-----------------------------| ----------------------------------------------|
| `disabled`    | `boolean`                   | Disables the component                        |
| `icon`        | `object<react.element>`     | React icon element                            |

**Reason for existing:**

The PrimaryPositiveButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import {
	Icons,
	PrimaryPositiveButton
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<PrimaryPositiveButton icon={ <Icons.MyIcon /> } />Hello World!</PrimaryPositiveButton>
		);
	}
}
```

