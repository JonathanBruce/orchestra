/* global document, React, ReactDOM */

import 'sass/ui.scss';
import SecondaryPositiveButton from 'components/buttons/SecondaryPositive.jsx';

class SecondaryPositiveButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'secondary positive button';
	};

	render() {
		return (
			<div id='secondary-positive-button'>
				<div ref='text' className='text'></div>
				<SecondaryPositiveButton onClick={ this.onClick }>
					Secondary Positive Button
				</SecondaryPositiveButton>
			</div>
		);
	}
}

ReactDOM.render(<SecondaryPositiveButtonTest />, document.getElementById('test'));
