### `PartialTertiaryButton` !heading

* __Internal components used:__ `PartialButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-partial`, `tertiary`
* __Located at__: `src/components/buttons/PartialTertiary.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The PartialTertiaryButton is used in various places in the Insightpool application.

**Usage:**

```javascript
import {
	Icons,
	PartialTertiaryButton
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<PartialTertiaryButton><Icons.MyIcon /></PartialTertiaryButton />
		);
	}
}
```