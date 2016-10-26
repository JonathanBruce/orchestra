### `PaginationApprove` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-pagination-approve`
* __Located at__: `src/components/misc/PaginationApprove.jsx`

**Props:**

| Name                 | Type            | Desciption                                                 |
| ---------------------|-----------------|------------------------------------------------------------|
| `approvedDisabled`   | `boolean`       | To disable approval button                                 |
| `onApprovalClick`    | `function`      | Function to call when approval is clicked                  |
| `currentPage`        | `number|string` | Current page of results                                    |
| `onDecreaseClick`    | `function`      | Function to call when decrease is clicked                  |
| `onIncreaseClick`    | `function`      | Function to call when increase is clicked                  |
| `decreaseDisabled`   | `boolean`       | To disable decrease button i.e. at first page of results   |
| `increaseDisabled`   | `boolean`       | To disable decrease button i.e. at last page of results    |
| `totalPages`         | `number|string` | Total pages of results                                     |

**Reason for existing:**

The PaginationApprove is used to go through pages of results and approve pages of results for the Insightpool application.

**Usage:**

```javascript
import { PaginationApprove } from 'orchestra';

class MyComponent extends React.Component {
	onApprovalClick = () => {
		console.log('approve');
	};

	onDecreaseClick = () => {
		console.log('decrease');
	};

	onIncreaseClick = () => {
		console.log('increase');
	};

	render() {
		return (
			<PaginationApprove
				currentPage={ 5 }
				onApprovalClick={ this.onApprovalClick }
				onDecreaseClick={ this.onDecreaseClick }
				onIncreaseClick={ this.onIncreaseClick }
				totalPages={ 10 } />
		);
	}
}
```

