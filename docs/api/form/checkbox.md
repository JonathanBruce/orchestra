### `CheckBox` !heading

* __HTML tag extended:__ `<input type='checkbox' />`
* __CSS class(es) used:__ `orch-checkbox`
* __Located at__: `src/components/form/Checkbox.jsx`

**Props:**

| Name          | Type          | Desciption                                    |
| ------------- |---------------| ----------------------------------------------|
| `checked`     | `boolean`     | For initial checked state                     |
| `disabled`    | `boolean`     | Disables the component                        |
| `onClick(val)`| `function`    | What to do on a click, bool provided          |

**Reason for existing:**

This component takes all of the usual suspects that regular HTML checkbox tags take.

**Usage:**

```javascript
import { Checkbox } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Checkbox
				checked 
				onClick={
					(val) => {
						console.log('hello world!')
					}
				} />
		);
	}
}
```

