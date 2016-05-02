/* global document, React, ReactDOM */

import 'sass/ui.scss';
import PrimaryNeutralButton from 'components/buttons/PrimaryNeutral.jsx';

class PrimaryNeutralButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'primary neutral button';
	};

	render() {
		return (
			<div id='primary-neutral-button'>
				<div ref='text' className='text'></div>
				<PrimaryNeutralButton onClick={ this.onClick }>
					Primary Neutral Button
				</PrimaryNeutralButton>
			</div>
		);
	}
}

ReactDOM.render(<PrimaryNeutralButtonTest />, document.getElementById('test'));
