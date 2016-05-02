/* global document, React, ReactDOM */

import 'sass/ui.scss';
import PrimaryButton from 'components/base/PrimaryButton.jsx';

class PrimaryButtonTest extends React.Component {
	render() {
		return (
			<div id='primary-button'>
				<div className='inactive'>
					<PrimaryButton>Primary</PrimaryButton>
				</div>

				<div className='active'>
					<PrimaryButton active>Primary</PrimaryButton>
				</div>

				<div className='data-foo'>
					<PrimaryButton data-foo='foo'>Primary</PrimaryButton>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<PrimaryButtonTest />, document.getElementById('test'));