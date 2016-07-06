### `Content` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-content`
* __Located at__: `src/components/misc/Content.jsx`

**Props:**

| Name              | Type          | Desciption                                    |
| ------------------|---------------| ----------------------------------------------|
| `icon`            | `object`      | Icon for content block                        |
| `onScrollBottom`  | `function`    | Action to fire when scrolled to the bottom    |
| `title`           | `string`      | Title of the content block                    |
| `widget`          | `object`      | Widget for the content block                  |

**Reason for existing:**

This component is used for various pieces of content around the site.

**Usage:**

```javascript
import { Content, Icons } from 'orchestra';

class MyComponent extends React.Component {
	render() {
		return (
			<Content icon={ <Icons.Links /> }
				onScrollBottom={ this.action() }
				title='My Content'
				widget={ this.renderButton() }>
				Hello, this is my content!
			</Content>
		);
	}
}
```

