### `Container` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-container`
* __Located at__: `src/components/grid/Container.jsx`

**Props:**

| Name                 | Type            | Desciption                                                                                     |
| ---------------------|-----------------| -----------------------------------------------------------------------------------------------|
| `className`          | `array`         | Array of object items to render the items to be toggled                                        |
| `children`           | `boolean`       | If item is active it will disable onclick events                                               |

**Reason for existing:**

The Container is used for laying out grids for the Insightpool application.  This takes grids that add up to 12.

**Usage:**

```javascript
import { Container, Six } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Container
				items={ items }
				onClick={ onItemClick }>
				<Six />
				<Six />
			</Container>
		);
	}
}
```

