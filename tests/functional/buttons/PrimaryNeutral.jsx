/* global document, React, ReactDOM */

import 'sass/ui.scss';
import PrimaryNeutralButton from 'components/buttons/PrimaryNeutral.jsx';

class PrimaryNeutralButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'orch-primary neutral button';
	};

	render() {
		return (
			<div id='primary-neutral-button'>
				<span ref='text' className='text'></span>
				<PrimaryNeutralButton onClick={ this.onClick }>
					Primary Neutral Button
				</PrimaryNeutralButton>
			</div>
		);
	}
}

ReactDOM.render(<PrimaryNeutralButtonTest />, document.getElementById('test'));
