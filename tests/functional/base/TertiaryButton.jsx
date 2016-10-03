/* global document, React, ReactDOM */

import 'sass/ui.scss';
import GoBack from 'icons/GoBack.jsx';
import TertiaryButton from 'components/base/TertiaryButton.jsx';

class TertiaryButtonTest extends React.Component {
	render() {
		return (
			<div id='tertiary-button'>
				<TertiaryButton><GoBack /></TertiaryButton>
			</div>
		);
	}
}

ReactDOM.render(<TertiaryButtonTest />, document.getElementById('test'));