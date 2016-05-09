### `FemaleButton` !heading

* __Internal components used:__ `PrimaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `female`
* __Located at__: `src/components/buttons/Female.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `active`      | `boolean`     | Gives the component an active class           |
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The FemaleButton is used in conjunction with Insightpool searches.

**Usage:**

```javascript
import { FemaleButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<FemaleButton active={ true } />
		);
	}
}
```

