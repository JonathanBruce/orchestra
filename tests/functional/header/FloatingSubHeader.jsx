/* global document, React, ReactDOM */

import 'sass/ui.scss';
import FloatingSubHeader from 'components/headers/FloatingSubHeader.jsx';

class FloatingSubHeaderTest extends React.Component {
	render() {
		const headerStyles = { height: '2000px' };

		return (
			<div id='float-header' style={ headerStyles }>
				<FloatingSubHeader>
					<div>Floating Header Content</div>
				</FloatingSubHeader>
			</div>
		);
	}
}

ReactDOM.render(<FloatingSubHeaderTest />, document.getElementById('test'));