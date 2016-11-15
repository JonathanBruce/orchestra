/* eslint-disable */
/* global document, React, ReactDOM, window */

import 'sass/ui.scss';
import CheckBox from 'components/form/CheckBox.jsx';

class CheckBoxTest extends React.Component {
	onDisabledCheckboxChange = (bool) => {
		const disabledText = this.refs[ 'disabled-text' ];

		this.onCheckBoxChange(disabledText, bool);
	};

	onEventCheckboxChange = (bool, event) => {
		const eventText = this.refs[ 'event-text' ];
		const eventType = event.type;

		this.onCheckBoxChange(eventText, eventType);
	}

	onCheckedCheckboxChange = (bool) => {
		const enabledText = this.refs[ 'checked-text' ];

		this.onCheckBoxChange(enabledText, bool);
	};

	onUncheckedCheckboxChange = (bool) => {
		const enabledText = this.refs[ 'unchecked-text' ];

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

				<div id='enabled-checkbox-checked'>
					<div className='checked-text' ref='checked-text'></div>
					<CheckBox onClick={ this.onCheckedCheckboxChange }
						checked
						label='Option A' />
				</div>

				<div id='enabled-checkbox-unchecked'>
					<div className='unchecked-text' ref='unchecked-text'></div>
					<CheckBox onClick={ this.onUncheckedCheckboxChange }
						label='Option A' />
				</div>

				<div id='event-checkbox-unchecked'>
					<div className='unchecked-text' ref='event-text'></div>
					<CheckBox onClick={ this.onEventCheckboxChange }
						label='Option A' />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<CheckBoxTest />, document.getElementById('test'));