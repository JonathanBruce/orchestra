### `One` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `grid-1`
* __Located at__: `src/components/grid/One.jsx`

**Props:**

| Name                 | Type                         | Desciption                                                                                     |
| ---------------------|------------------------------|----------------------------------------------|
| `children`           | `array|element|string`       | Content for the grid                          |
| `alpha`              | `boolean`                    | Add if first grid of nested grid              |
| `omega`              | `boolean`                    | Add if last grid of nested grid for the grid  |

**Reason for existing:**

One is used for laying out grids for the Insightpool application.

**Usage:**

```javascript
import {
	Container,
	Eleven,
	One
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Container>
				<Eleven>Content</Eleven>
				<One>Content</One>
			</Container>
		);
	}
}
```

