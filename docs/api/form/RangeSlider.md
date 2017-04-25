### `Range` !heading

* __HTML tag extended:__ `<div></div>`
* __CSS class(es) used:__ `orch-range-slider`
* __Located at__: `src/components/form/RangeSlider.jsx`

**Props:**

| Name                 | Type            | Desciption                                                                                                                                |
|----------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `disabled`           | `boolean`       | Boolean which determines the availability of the slider. Defaults to `false`.                                                               |
| `interval`           | `number`        | Number representing the ticking gap when incrementing/decrementing the value of the slider                                             |
| `max`                | `number`        | Number representing the highest value the slider can reach.                                                                                 |
| `maxDisplay`         | `string `       | Display value for the right slider, displayed when at rest.                                                                                 |
| `maxLabel`           | `string`        | String value label right of the slider to inform the user of maximum value                                                                  |
| `maxValue`           | `string `       | Real value for the right slider, displayed during value manipulation.                                                                       |
| `min`                | `number`        | Number representing the lowest value the slider can reach.                                                                                  |
| `minDisplay`         | `string `       | Display value for the left slider, displayed when at rest.                                                                                  |
| `minLabel`           | `string`        | String value label left of the slider to inform the user of minimum value                                                                   |
| `minValue`           | `string `       | Real value for the left slider, displayed during value manipulation.                                                                        |
| `onDragChange`       | `function`      | A function which is called when the slider is dragged. The value that slider is pointing to will be passed down.                            |
| `onDragEnd`          | `function`      | A function that is called when user lets go of the slider. The value of the position where slider ended will be passed down.            |
| `onDragStart`        | `function`      | A function that is called when user initiates the drag of the slider. The value of the position where slider started will be passed down. |
| `width`              | `number`        | Number representing the width of the slider.                                                                                                |

**States:**
| Name                 | Type            | Desciption                                                                                                                                |
|----------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `drag`               | `boolean`       | Boolean determining if it is able to drag or not                                                                                          |

**Reason for existing**

The range slider is to allow for interpolation between two values that should be constrained by each other but also a maximum and minimum. 

**Usage:**

```javascript
import { RangeSlider } from 'orchestra';

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
		const { left, right } = this.props;
		
		return (
			<RangeSlider
				interval={ 1 }
				max={ 0 }
				maxValue={ right } 
				min={ 10 }
				minValue={ left }
				onChange={ this.onChange }  
				onDragEnd={ this.onDragEnd }  
				onDragStart={ this.onDragStart } />  
		);
	}
}
```