### `EarnedMediaStat` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-earned-media-stat`
* __Located at__: `src/components/misc/EarnedMediaStat.jsx`

**Props:**

| Name              | Type          | Description                                   |
| ------------------|---------------| ----------------------------------------------|
| `icon`            | `object`      | Icon for earned media stat                    |
| `amount`          | `string`      | Dollar amount of media earned                 |
| `title`           | `string`      | Title the statistical value                   |
| `number`          | `number`      | Statistical value of media earned             |

**Reason for existing:**

This component is used for various pieces of content around the site representing earned media values.

**Usage:**

```javascript
import { Content, Icons } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<EarnedMediaStat
				icon={ <Icons.Impressions /> }
				amount={ '$1.00' }
				title='Impressions'
				number={ 1 } />
		);
	}
}
```

