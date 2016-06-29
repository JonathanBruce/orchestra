/* eslint-disable */
/* global document, React, ReactDOM, window */

import 'sass/ui.scss';
import CheckBox from 'components/form/CheckBox.jsx';

class CheckBoxTest extends React.Component {
	onDisabledCheckboxChange = (bool) => {
		const disabledText = this.refs[ 'disabled-text' ];

		this.onCheckBoxChange(disabledText, bool);
	};

	onEnabledCheckboxChange = (bool) => {
		const enabledText = this.refs[ 'enabled-text' ];

		this.onCheckBoxChange(enabledText, bool);
	};

	onCheckBoxChange = (ref, bool) => {
		ref.textContent = bool;
	};

	render() {
		return (
			<div id='checkbox'>
				<div id='disabled-checkbox'>
					<div className='disabled-text' ref='disabled-text'></div>
					<CheckBox onClick={ this.onDisabledCheckboxChange }
						disabled
						label='Option B' />
				</div>

				<div id='enabled-checkbox'>
					<div className='enabled-text' ref='enabled-text'></div>
					<CheckBox onClick={ this.onEnabledCheckboxChange }
						checked
						label='Option A' />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<CheckBoxTest />, document.getElementById('test'));