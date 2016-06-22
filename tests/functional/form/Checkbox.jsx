/* eslint-disable */
/* global document, React, ReactDOM, window */

import 'sass/ui.scss';
import Checkbox from 'components/form/Checkbox.jsx';

class InputTest extends React.Component {
	onCheckboxChange = (bool) => {
		const { text } = this.refs;

		text.textContent = bool;
	};

	render() {
		return (
			<div id='checkbox'>
				<div id='disabled-checkbox'>
					<Checkbox disabled />
				</div>

				<div id='enabled-checkbox'>
					<div className='text' ref='text'></div>
					<Checkbox checked callback={ this.onCheckboxChange } />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<InputTest />, document.getElementById('test'));