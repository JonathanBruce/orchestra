/* global document, React, ReactDOM */

import 'sass/ui.scss';
import GoBack from 'icons/GoBack.jsx';
import TertiaryNegativeButton from 'components/buttons/TertiaryNegative.jsx';

class TertiaryNegativeButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'tertiary negative button';
	};

	render() {
		return (
			<div id='tertiary-negative-button'>
				<div ref='text' className='text'></div>
				<TertiaryNegativeButton onClick={ this.onClick }>
					<GoBack />
				</TertiaryNegativeButton>
			</div>
		);
	}
}

ReactDOM.render(<TertiaryNegativeButtonTest />, document.getElementById('test'));
