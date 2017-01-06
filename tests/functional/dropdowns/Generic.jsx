/* eslint-disable */
/* global document, React, ReactDOM, window */

import 'sass/ui.scss';
import DropDown from 'components/dropdowns/Generic.jsx';

class DropDownTest extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			active: false,
			options: [
				{ label: 'one', value: 1 },
				{ label: 'two', value: 2 },
				{ label: 'three', value: 3 }
			],
			selected: 1
		}
	}

	onDropDownChange = (value) => {
		this.setState({
			selected: value
		});
	};

	onDropDownToggle = () => {
		const { active } = this.state;

		this.setState({
			active: !active
		});
	};

	render() {
		const {
			active,
			options,
			selected
		} = this.state;

		return (
			<div id='dropdown'>
				<div id='disabled-dropdown'>
					<DropDown
						disabled
						label='DropDown'
						options={ options }
						selected={ selected }
						onChange={ this.onDropDownChange }
						onToggle={ this.onDropDownToggle } />
				</div>

				<div id='enabled-dropdown'>
					<DropDown
						active={ active }
						label='DropDown'
						options={ options }
						selected={ selected }
						onChange={ this.onDropDownChange }
						onToggle={ this.onDropDownToggle } />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<DropDownTest />, document.getElementById('test'));