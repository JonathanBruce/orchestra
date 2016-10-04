### `FullPrimaryButton` !heading

* __Internal components used:__ `PrimaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-full`, `primary`
* __Located at__: `src/components/buttons/FullPrimary.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The FullPrimaryButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import { FullPrimaryButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<FullPrimaryButton>Hello World!</FullPrimaryButton>
		);
	}
}
```

