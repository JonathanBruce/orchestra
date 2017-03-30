/* eslint-disable */
/* global document, React, ReactDOM */

import 'sass/ui.scss';
import RangeSlider from 'components/form/RangeSlider.jsx';
import {
	onStart,
	onEnd,
	onChange
} from 'lib/range.js';

const MAX_VALUE = 20;
const MIN_VALUE = 0;

class RangeSliderTest extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayText: '',
			disabled: false,
			left: 0,
			leftDisplay: 0,
			right: 0,
			rightDisplay: 0
		};
	}

	render() {
		const {
			left,
			leftDisplay,
			right,
			rightDisplay
		} = this.state;

		return (
			<div id='range'>
				<RangeSlider
					interval={ 5 }
					max={ 20 }
					maxDisplay={ rightDisplay }
					maxLabel='1m+'
					maxValue={ right }
					min={ 0 }
					minDisplay={ leftDisplay }
					minLabel='0'
					minValue={ left }
					onDragChange={ onChange.bind(this) }
					onDragEnd={ onEnd.bind(this) }
					onInputStart={ onStart.bind(this) }
					onDragStart={ onChange.bind(this) }
					width={ 193 } />
			</div>
		);
	}
}

ReactDOM.render(<RangeSliderTest />, document.getElementById('test'));