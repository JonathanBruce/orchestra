/* global document, React, ReactDOM */

import 'sass/ui.scss';
import FullButton from 'components/base/FullButton.jsx';

class FullButtonTest extends React.Component {
	render() {
		return (
			<div id='full-button'>
				<div className='inactive'>
					<FullButton>Full</FullButton>
				</div>

				<div className='active'>
					<FullButton active>Full</FullButton>
				</div>

				<div className='data-foo'>
					<FullButton data-foo='foo'>Full</FullButton>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<FullButtonTest />, document.getElementById('test'));