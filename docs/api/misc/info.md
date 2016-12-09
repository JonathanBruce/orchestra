### `Info` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-info`
* __Located at__: `src/components/misc/Info.jsx`

**Props:**

| Name              | Type          | Desciption                                    |
| ------------------|---------------| ----------------------------------------------|
| `title`           | `string`      | Title of the tooltip                          |
| `value`           | `string`      | String content to be rendered                 |

**Reason for existing:**

This component is used for displaying a toggleable information tooltip

**Usage:**

```javascript
import { Info } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Info
				title={ 'Tooltip' }
				value={ 'This is an information window' } />
		);
	}
}
```

