### `Seven` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `grid-7`
* __Located at__: `src/components/grid/Seven.jsx`

**Props:**

| Name                 | Type                         | Desciption                                                                                     |
| ---------------------|------------------------------|----------------------------------------------|
| `children`           | `array|element|string`       | Content for the grid                          |
| `alpha`              | `boolean`                    | Add if first grid of nested grid              |
| `omega`              | `boolean`                    | Add if last grid of nested grid for the grid  |

**Reason for existing:**

Seven is used for laying out grids for the Insightpool application.

**Usage:**

```javascript
import {
	Container,
	Five,
	Seven
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Container>
				<Seven>Content</Seven>
				<Five>Content</Five>
			</Container>
		);
	}
}
```

