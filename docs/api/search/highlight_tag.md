### `HighlightTag` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-highlight-tag`
* __Located at__: `src/components/search/HighlightTag.jsx`

**Props:**

| Name              | Type          | Desciption                                    |
| ------------------|---------------| ----------------------------------------------|
| `label`           | `element`     | Tag label to be displayed                     |
| `onClose`         | `function`    | Action to fire when X button is clicked       |


**Reason for existing:**

This component is used for displaying a removeable highlight tag which can be displayed in place of text inputs.

**Usage:**

```javascript
import { HighlightTag } from 'orchestra';

class MyComponent extends React.Component {
	onCloseHighlightTag = () => {
		// ...
	}

	render() {
		return (
			<FilterBox
				label='Sports'
				onClose={ this.onCloseHighlightTag }>
			</FilterBox>
		);
	}
}
```

