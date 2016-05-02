/* global document, React, ReactDOM */

import 'sass/ui.scss';
import SecondaryNeutralButton from 'components/buttons/SecondaryNeutral.jsx';

class SecondaryNeutralButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'secondary neutral button';
	};

	render() {
		return (
			<div id='secondary-neutral-button'>
				<div ref='text' className='text'></div>
				<SecondaryNeutralButton onClick={ this.onClick }>
					Secondary Neutral Button
				</SecondaryNeutralButton>
			</div>
		);
	}
}

ReactDOM.render(<SecondaryNeutralButtonTest />, document.getElementById('test'));
