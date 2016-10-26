### `Slider` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-slider`
* __Located at__: `src/components/form/Slider.jsx`

**Props:**

| Name                 | Type            | Desciption                                                                                                                                |
|----------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `defaultValue`       | `number`        | Value which is currently set. Will need to be update `onChange` handler.                                                                  |
| `disabled`           | `boolean`       | Boolean which determines the availability of the slider. Defaults to `false`.                                                             |
| `interval`           | `number`        | Number representing the ticking gap when incrementing/decrementing the value of the slider                                                |
| `label`              | `string`        | String value representing the display label value of the slider                                                                           |
| `max`                | `number`        | Number representing the highest value the slider can reach.                                                                               |
| `min`                | `number`        | Number representing the lowest value the slider can reach.                                                                                |
| `onDragChange`       | `function`      | A function which is called when the slider is dragged. The value that slider is pointing to will be passed down.                          |
| `onDragEnd`          | `function`      | A function that is called when user lets go of the slider. The value of the position where slider ended will be passed down.              |
| `onDragStart`        | `function`      | A function that is called when user initiates the drag of the slider. The value of the position where slider started will be passed down. |
| `width`              | `number`        | Number representing the width of the slider.                                                                                              |

**States:**
| Name                 | Type            | Desciption                                                                                                                                |
|----------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `drag`               | `boolean`       | Boolean determining if it is able to drag or not                                                                                          |

**Reason for existing**

The Slider is used for users to have an easy way selecting a range of number values. 

**Usage:**

```javascript
import { Slider } from 'orchestra';
import { INTERVAL, MIN_VALUE, MAX_VALUE } from 'EXAMPLE_CONSTANT';

class MyComponent extends React.Component {
	onChange = (value) => {
		console.log(value);
	};
	
	onDragStart = (value) => {
		console.log('drag started', value);
	};
	
	onDragEnd = (value) => {
		console.log('drag ended', value);
	};
	
	render() {
		const { value } = this.props;
		
		return (
			<Slider
				defaultValue={ value }
				interval={ INTERVAL }
				max={ MAX_VALUE }
				min={ MIN_VALUE }
				onChange={ this.onChange }  
				onDragEnd={ this.onDragEnd }  
				onDragStart={ this.onDragStart } />  
		);
	}
}
```