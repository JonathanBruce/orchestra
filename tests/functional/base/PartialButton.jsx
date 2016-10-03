/* global document, React, ReactDOM */

import 'sass/ui.scss';
import GoBack from 'icons/GoBack.jsx';
import PartialButton from 'components/base/PartialButton.jsx';

class PartialButtonTest extends React.Component {
	render() {
		return (
			<div id='partial-button'>
				<PartialButton><GoBack /></PartialButton>
			</div>
		);
	}
}

ReactDOM.render(<PartialButtonTest />, document.getElementById('test'));