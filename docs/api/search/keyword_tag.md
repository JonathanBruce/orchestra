### `KeywordTag` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-keyword-tag`
* __Located at__: `src/components/search/KeywordTag.jsx`

**Props:**

| Name                 | Type            | Desciption                                                 |
| ---------------------|-----------------|------------------------------------------------------------|
| `id`                 | `string`        | ID of follower                                             |
| `onDeleteClick`      | `func`          | Function for deleting the keyword tag                      |
| `network`            | `string`        | Value for current network                                  |
| `onNetworkChange`    | `func`          | Function for changing network in network menu              |
| `onNetworkToggle`    | `func`          | Function for toggling the network menu open or closed      |
| `openNetwork`        | `boolean`       | Boolean for whether the network menu should be open        |
| `onRequirementChange`| `func`          | Function for changing network in network menu              |
| `onRequirementToggle`| `func`          | Function for toggling the requirement menu open or closed  |
| `openRequirement`    | `func`          | Boolean for whether the requirement menu should be open    |
| `onTagChange`        | `func`          | Function for changing tag value                            |
| `requirement`        | `string`        | Value for current network                                  |
| `value`              | `string`        | Value for keyword tag                                      |

**Reason for existing:**

The KeywordTag is used to display keyword tags for the Insightpool application.

**Usage:**

```javascript
import { KeywordTag } from 'orchestra';
import { SUPPORTED_NETWORKS } from 'constants/KEYWORD_TAGS';

class MyComponent extends React.Component {
	render() {
		return (
			<KeywordTag
				id='2929392'
				network={ SUPPORTED_NETWORKS.LOCKED } 
				onNetworkChange={
					(network) => {
						console.log(network);
					}
				}
				onTagChange={
					(value) => {
						console.log(value);
					}
				} />
		);
	}
}
```