/* global document, React, ReactDOM */

import 'sass/ui.scss';
import PrimaryNegativeButton from 'components/buttons/PrimaryNegative.jsx';

class PrimaryNegativeButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'orch-primary negative button';
	};

	render() {
		return (
			<div id='primary-negative-button'>
				<span ref='text' className='text'></span>
				<PrimaryNegativeButton onClick={ this.onClick }>
					Primary Negative Button
				</PrimaryNegativeButton>
			</div>
		);
	}
}

ReactDOM.render(<PrimaryNegativeButtonTest />, document.getElementById('test'));
