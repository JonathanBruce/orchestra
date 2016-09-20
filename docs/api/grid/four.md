### `Four` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `grid-4`
* __Located at__: `src/components/grid/Four.jsx`

**Props:**

| Name                 | Type                         | Desciption                                                                                     |
| ---------------------|------------------------------|----------------------------------------------|
| `children`           | `array|element|string`       | Content for the grid                          |
| `alpha`              | `boolean`                    | Add if first grid of nested grid              |
| `omega`              | `boolean`                    | Add if last grid of nested grid for the grid  |

**Reason for existing:**

Four is used for laying out grids for the Insightpool application.

**Usage:**

```javascript
import {
	Container,
	Eight,
	Four
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Container>
				<Four>Content</Four>
				<Eight>Content</Eight>
			</Container>
		);
	}
}
```

