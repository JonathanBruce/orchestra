### `Three` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `grid-3`
* __Located at__: `src/components/grid/Three.jsx`

**Props:**

| Name                 | Type                         | Desciption                                                                                     |
| ---------------------|------------------------------|----------------------------------------------|
| `children`           | `array|element|string`       | Content for the grid                          |
| `alpha`              | `boolean`                    | Add if first grid of nested grid              |
| `omega`              | `boolean`                    | Add if last grid of nested grid for the grid  |

**Reason for existing:**

Three is used for laying out grids for the Insightpool application.

**Usage:**

```javascript
import {
	Container,
	Nine,
	Three
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Container>
				<Three>Content</Three>
				<Nine>Content</Nine>
			</Container>
		);
	}
}
```

