/* global document, React, ReactDOM */

import 'sass/ui.scss';
import GoBack from 'icons/GoBack.jsx';
import TertiaryPositiveButton from 'components/buttons/TertiaryPositive.jsx';

class TertiaryPositiveButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'tertiary positive button';
	};

	render() {
		return (
			<div id='tertiary-positive-button'>
				<div ref='text' className='text'></div>
				<TertiaryPositiveButton onClick={ this.onClick }>
					Tertiary Positive Button
				</TertiaryPositiveButton>
			</div>
		);
	}
}

ReactDOM.render(<TertiaryPositiveButtonTest />, document.getElementById('test'));
