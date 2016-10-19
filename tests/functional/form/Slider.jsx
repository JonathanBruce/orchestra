/* eslint-disable */
/* global document, React, ReactDOM */

import 'sass/ui.scss';
import Slider from 'components/form/Slider.jsx';

const MAX_VALUE = 20;
const MIN_VALUE = 0;

class SliderTest extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayText: '',
			value: 1
		};
	}

	onChange = (value) => {
		this.setState({
			value
		});
	};

	onChangeTextInput = (event) => {
		const { value } = event.target;

		this.setState({
			value
		});
	};

	onDragStart = (value) => {
		this.setState({
			value
		});
	};

	onDragEnd = (endValue) => {
		this.setState({
			displayText: `Released at ${endValue}`
		});
	};

	render() {
		const { displayText, value } = this.state;

		return (
			<div id='slider'>
				<div id='display-value'>{ value }</div>
				<div id='display-text'>{ displayText }</div>
				<Slider
					defaultValue={ value }
					interval={ 5 }
					label='days'
					max={ MAX_VALUE }
					min={ MIN_VALUE }
					onDragChange={ this.onChange }
					onDragEnd={ this.onDragEnd }
					onDragStart={ this.onDragStart } />
				<input
					defaultValue={ value }
					id='adjusting-value-input'
					onChange={ this.onChangeTextInput }
					type='text' />
			</div>
		);
	}
}

ReactDOM.render(<SliderTest />, document.getElementById('test'));