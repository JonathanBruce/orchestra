### `Input` !heading

* __Internal components used:__ `Input.jsx`
* __HTML tag extended:__ `<input />`
* __CSS class(es) used:__ `input secondary`
* __Located at__: `src/components/form/Input.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `disabled`    | `boolean`     | Disables the component                        |
| `error`       | `boolean`     | Puts the input in an error state              |
| `icon`        | `object`      | Icon to use (use orchestra Icons)             |

**Reason for existing:**

The Input is used in conjunction with Insightpool searches.  This component takes all of the usual suspects that regular HTML input tags take.

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
