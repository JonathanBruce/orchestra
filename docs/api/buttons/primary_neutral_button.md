### `PrimaryNeutralButton` !heading

* __Internal components used:__ `PrimaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-primary`, `orch-neutral`
* __Located at__: `src/components/buttons/PrimaryNeutral.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The PrimaryNeutralButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import { PrimaryNeutralButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<PrimaryNeutralButton>Hello World!</PrimaryNeutralButton>
		);
	}
}
```