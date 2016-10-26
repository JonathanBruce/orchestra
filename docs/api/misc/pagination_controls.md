### `PaginationControls` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-pagination-controls`
* __Located at__: `src/components/misc/PaginationControls.jsx`

**Props:**

| Name                 | Type            | Desciption                                                 |
| ---------------------|-----------------|------------------------------------------------------------|
| `onDecreaseClick`    | `function`      | Function to call when decrease is clicked                  |
| `onIncreaseClick`    | `function`      | Function to call when increase is clicked                  |
| `decreaseDisabled`   | `boolean`       | To disable decrease button i.e. at first page of results   |
| `increaseDisabled`   | `boolean`       | To disable decrease button i.e. at last page of results    |

**Reason for existing:**

The PaginationControls is used to go through pages of results for the Insightpool application.

**Usage:**

```javascript
import { PaginationControls } from 'orchestra';

class MyComponent extends React.Component {
	onDecreaseClick = () => {
		console.log('decrease');
	};

	onIncreaseClick = () => {
		console.log('increase');
	};

	render() {
		return (
			<PaginationControls
				onDecreaseClick={ this.onDecreaseClick }
				onIncreaseClick={ this.onIncreaseClick } />
		);
	}
}
```

