### `FullTertiaryButton` !heading

* __Internal components used:__ `FullButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-full`, `tertiary`
* __Located at__: `src/components/buttons/FullTertiary.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The FullTertiaryButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import { FullTertiaryButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<FullTertiaryButton>Hello World!</FullTertiaryButton>
		);
	}
}
```

