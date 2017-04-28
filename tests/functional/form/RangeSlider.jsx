/* eslint-disable */
/* global document, React, ReactDOM */

import 'sass/ui.scss';
import RangeSlider from 'components/form/RangeSlider.jsx';

class RangeSliderTest extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayText: '',
			disabled: false,
			min: 0,
			minDisplay: '0',
			max: 15,
			maxDisplay: '15'
		};
	}

	onEnd = (value) => {
		this.setState({
			displayText: `Released at ${value}`
		});
	};

	onChange = (rangeValue, element) => {
		this.setState({
			[ `${ element }Display` ]: rangeValue,
			[ element ]: rangeValue
		});
	};

	onStart = (value, element) => {
		this.setState({ [ `${ element }Display` ]: value });
	};

	render() {
		const {
			displayText,
			min,
			minDisplay,
			max,
			maxDisplay
		} = this.state;

		return (
			<div id='range'>
				<div id='display-min-value'>{ min }</div>
				<div id='display-max-value'>{ max }</div>
				<div id='display-text'>{ displayText }</div>
				<RangeSlider
					interval={ 5 }
					max={ 20 }
					maxDisplay={ maxDisplay }
					maxLabel='20'
					maxValue={ max }
					min={ 0 }
					minDisplay={ minDisplay }
					minLabel='0'
					minValue={ min }
					onDragChange={ this.onChange }
					onDragEnd={ this.onEnd }
					onDragStart={ this.onChange }
					shortenedDisplay
					width={ 180 } />
			</div>
		);
	}
}

ReactDOM.render(<RangeSliderTest />, document.getElementById('test'));