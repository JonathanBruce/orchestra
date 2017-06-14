### `KeywordTag` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-keyword-tag`
* __Located at__: `src/components/search/KeywordTag.jsx`

**Props:**

| Name                 | Type            | Desciption                                                  |
| ---------------------|-----------------|-------------------------------------------------------------|
| `disabled`           | `bool`          | Represents whether the tag should be disabled               |
| `editable`           | `bool`          | Represents whether a tag should be editable                 |
| `id`                 | `string`        | ID of follower                                              |
| `invalid`            | `boolean`       | Boolean for whether the input value is invalid              |
| `onEditToggle`       | `func`          | Function for additional callbacks while editmode is toggled |
| `onDeleteClick`      | `func`          | Function for deleting the keyword tag                       |
| `onEmptyClick`       | `func`          | Function for when the tag is empty                          |
| `network`            | `string`        | Value for current network                                   |
| `networks`           | `array`         | Array of networks for network options                       |
| `onNetworkChange`    | `func`          | Function for changing network in network menu               |
| `onNetworkToggle`    | `func`          | Function for toggling the network menu open or closed       |
| `openNetwork`        | `boolean`       | Boolean for whether the network menu should be open         |
| `onOptionsChange`    | `func`          | Function for changing values in keyword options menu        |
| `onOptionsToggle`    | `func`          | Function for toggling values in keyword options menu        |
| `openOptions`        | `boolean`       | Boolean for whether the options menu should be open         |
| `onPreviewClick`     | `func`          | Function for clicking a preview tag                         |
| `onRequirementChange`| `func`          | Function for changing network in network menu               |
| `onRequirementToggle`| `func`          | Function for toggling the requirement menu open or closed   |
| `openRequirement`    | `boolean`       | Boolean for whether the requirement menu should be open     |
| `onTagChange`        | `func`          | Function for changing tag value                             |
| `options`            | `array`         | Array of objects containing `label` and `value`             |
| `preview`            | `boolean`       | Represents whether the tag is in preview mode               |
| `requirement`        | `string`        | Value for current requirement                               |
| `selected`           | `boolean`       | Boolean for whether the selected visual state is active     |
| `thumbnail`          | `string`        | source url for thumbnail tags, fallback available for error |
| `value`              | `string`        | Value for keyword tag                                       |

**Reason for existing:**

The KeywordTag is used to display keyword tags for the Insightpool application.

**Usage:**

```javascript
import { KeywordTag } from 'orchestra';
import { ALL_NETWORKS, REQUIREMENTS } from 'sheet-music';

class MyComponent extends React.Component {
	render() {
		return (
			<KeywordTag
				id='2929392'
				disabled={ false }
				invalid={ false }
				network={ ALL_NETWORKS.TWITTER }
				networks={ [ ALL_NETWORKS.TWITTER ] }
				preview={ false }
				requirement={ REQUIREMENTS.NEUTRAL }
				onEditToggle={
				    (edit) => {
				        console.log(edit);
				    }
				}
				onNetworkChange={
					(network) => {
						console.log(network);
					}
				}
				onTagChange={
					(value) => {
						console.log(value);
					}
				}
				onTagInputChange = {
				    (value) => {
				        console.log(value);
				    }
				} />
		);
	}
}
```