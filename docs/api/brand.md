### `BrandButton` !heading

* __Internal components used:__ `PrimaryButton.jsx`
* __HTML tag extended:__ `<button></button>`
* __CSS class(es) used:__ `brand`
* __Located at__: `src/components/buttons/Brand.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `active`      | `boolean`     | Gives the component an active class           |
| `disabled`    | `boolean`     | Disables the component                        |

**Reason for existing:**

The BrandButton is used in conjunction with Insightpool searches.

**Usage:**

```javascript
import { BrandButton } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<BrandButton active={ true } />
		);
	}
}
```

