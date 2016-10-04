### `PartialSecondaryButton` !heading

* __Internal components used:__ `PartialButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-partial`, `secondary`
* __Located at__: `src/components/buttons/PartialSecondary.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The PartialSecondaryButton is used in various places in the Insightpool application.

**Usage:**

The `children` you pass to this compnent is expected to be a React element.  The use case in the example below is an icon, which is what this component was made for.

```javascript
import {
	Icons,
	PartialSecondaryButton
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<PartialSecondaryButton><Icons.MyIcon /></PartialSecondaryButton />
		);
	}
}
```

