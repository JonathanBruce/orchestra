### `Input` !heading

* __HTML tag extended:__ `<input type='text' />`
* __CSS class(es) used:__ `orch-input orch-secondary`
* __Located at__: `src/components/form/Input.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |
| `error`       | `boolean`     | Puts the input in an error state              |
| `icon`        | `object`      | Icon to use (use orchestra Icons)             |

**Reason for existing:**

This component takes all of the usual suspects that regular HTML input tags take.

**Usage:**

```javascript
import {
	Icons,
	Input
} from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Input defaultValue='Username' icon={ <Icons.SmallUser /> } />
		);
	}
}
```

