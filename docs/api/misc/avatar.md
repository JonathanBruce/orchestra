### `Avatar` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-avatar`
* __Located at__: `src/components/misc/Avatar.jsx`

**Props:**

| Name                 | Type            | Desciption                                                 |
| ---------------------|-----------------|------------------------------------------------------------|
| `image`              | `string`        | Image URL                                                  |
| `size`               | `numnber`       | Size of avatar, will be applied to height and width        |

**Reason for existing:**

The Avatar is used to display avatars or a default avatar for the Insightpool application.

**Usage:**

```javascript
import { Avatar } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Avatar
				image='http://www.insightpool.com/user.jpg'
				size={ 64 } />
		);
	}
}
```

