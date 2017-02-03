### `FloatingSubHeader` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-floating-sub-header`
* __Located at__: `src/components/headers/FloatingSubHeader.jsx`

**Props:**

| Name              | Type          | Desciption                                    |
| ------------------|---------------| ----------------------------------------------|
| `children`        | `element`     | Dynamic content to be rendered                |

**Reason for existing:**

This component is used for displaying a fixed "floating" header bar which floats on top of an adjacent header depending on scroll position.
Scrolling down causes the menu to float above, and scrolling up (or to the top) causes the menu to shift down, revealing the adjacent header

**Usage:**

```javascript
import { FloatingSubHeader } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<FloatingSubHeader>
				{ this.props.children }
			</FloatingSubHeader>
		);
	}
}
```

