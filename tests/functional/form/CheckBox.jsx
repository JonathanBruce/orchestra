/* eslint-disable */
/* global document, React, ReactDOM, window */

import 'sass/ui.scss';
import CheckBox from 'components/form/CheckBox.jsx';

class CheckBoxTest extends React.Component {
	onCheckBoxChange = (bool) => {
		const { text } = this.refs;

		text.textContent = bool;
	};

	render() {
		return (
			<div id='checkbox'>
				<div id='disabled-checkbox'>
					<CheckBox disabled />
				</div>

				<div id='enabled-checkbox'>
					<div className='text' ref='text'></div>
					<CheckBox checked callback={ this.onCheckBoxChange } />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<CheckBoxTest />, document.getElementById('test'));