### `PrimaryNegativeButton (deprecated)` !heading

* __Internal components used:__ `PrimaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-primary`, `orch-negative`
* __Located at__: `src/components/buttons/PrimaryNegative.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The PrimaryNegativeButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import { PrimaryNegativeButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<PrimaryNegativeButton>Hello World!</PrimaryNegativeButton>
		);
	}
}
```

