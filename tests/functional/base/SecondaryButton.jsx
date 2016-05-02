/* global document, React, ReactDOM */

import 'sass/ui.scss';
import Links from 'icons/Links.jsx';
import SecondaryButton from 'components/base/SecondaryButton.jsx';

class SecondaryButtonTest extends React.Component {
	render() {
		return (
			<div id='secondary-button'>
				<SecondaryButton icon={ <Links /> }>Secondary Button</SecondaryButton>
			</div>
		);
	}
}

ReactDOM.render(<SecondaryButtonTest />, document.getElementById('test'));