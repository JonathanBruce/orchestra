/* eslint-disable */
/* global document, React, ReactDOM, window */

import 'sass/ui.scss';
import Input from 'components/form/Input.jsx';
import Icons from 'icons/_all.js';

class InputTest extends React.Component {
	render() {
		return (
			<div id='input'>
				<div id='disabled-input'>
					<Input defaultValue='Default Value' icon={ <Icons.SmallUser /> } disabled />
				</div>

				<div id='enabled-input'>
					<Input defaultValue='Default Value' icon={ <Icons.SmallUser /> } />
				</div>

				<div id='placeholder-input'>
					<Input placeholder='Username' icon={ <Icons.SmallUser /> } />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<InputTest />, document.getElementById('test'));