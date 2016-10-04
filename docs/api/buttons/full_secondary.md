### `FullSecondaryButton` !heading

* __Internal components used:__ `FullButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-full`, `secondary`
* __Located at__: `src/components/buttons/FullSecondary.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The FullSecondaryButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import { FullSecondaryButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<FullSecondaryButton>Hello World!</FullSecondaryButton>
		);
	}
}
```

