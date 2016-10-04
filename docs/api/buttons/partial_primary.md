### `PartialPrimaryButton` !heading

* __Internal components used:__ `PartialButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `orch-partial`, `primary`
* __Located at__: `src/components/buttons/PartialPrimary.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The PartialPrimaryButton is used in various places in the Insightpool application.

**Usage:**

The `children` you pass to this compnent is expected to be a React element.  The use case in the example below is an icon, which is what this component was made for.

```javascript
import {
	Icons,
	PartialPrimaryButton
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<PartialPrimaryButton><Icons.MyIcon /></PartialPrimaryButton />
		);
	}
}
```

