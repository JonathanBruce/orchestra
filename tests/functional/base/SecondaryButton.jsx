/* global document, React, ReactDOM */

import 'sass/ui.scss';
import SecondaryButton from 'components/base/SecondaryButton.jsx';

class SecondaryButtonTest extends React.Component {
	render() {
		return (
			<div id='secondary-button'>
				<SecondaryButton>Secondary Button</SecondaryButton>
			</div>
		);
	}
}

ReactDOM.render(<SecondaryButtonTest />, document.getElementById('test'));