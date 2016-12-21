### `FilterBox` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-filter-box`
* __Located at__: `src/components/search/FilterBox.jsx`

**Props:**

| Name              | Type          | Desciption                                    |
| ------------------|---------------| ----------------------------------------------|
| `children`        | `element`     | Dynamic content to be rendered                |
| `onWidgetToggle`  | `function`    | Action to fire when expand is selected        |
| `title`           | `string`      | Title of the filter box                       |
| `titleIcon`       | `element`     | Optional filter box title icon                |
| `tooltipTitle`    | `element`     | Optional tooltip title                        |
| `tooltipValue`    | `element`     | Optional tooltip value                        |
| `widget`          | `object`      | Flyout widget                                 |
| `widgetIcon`      | `object`      | Icon for for the expand button                |
| `widgetOpen`      | `boolean`     | Represents whether the flyout is expanded     |

**Default Props:**

| Name              | Default Value      |
| ------------------|--------------------|
| `widgetIcon`      | <Icons.Search />   |

**Reason for existing:**

This component is used for containing an expanding list of filters or other dynamic content, and supports an optional info tooltip and toggleable widget component.

**Usage:**

```javascript
import { FilterBox, Icons } from 'orchestra';

class MyComponent extends React.Component {
	toggleSearchOverlay = () => {
		// ...
	}

	render() {
		return (
			<FilterBox
				info={ 'This is a description of the filter topics' }
				title='Filter Topics'
				titleIcon={ <Icons.Instagram /> }
				tooltipTitle={ 'Tooltip Title' }
				tooltipValue={ 'Descriptive Instructions' }
				widget={ <SearchOverlay /> }
				widgetIcon={ <Icons.Search /> }
				widgetOpen={ true }
				widgetToggle={ this.toggleSearchOverlay }>
				{ this.props.children }
			</FilterBox>
		);
	}
}
```

