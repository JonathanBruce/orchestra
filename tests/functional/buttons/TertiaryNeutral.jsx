/* global document, React, ReactDOM */

import 'sass/ui.scss';
import GoBack from 'icons/GoBack.jsx';
import TertiaryNeutralButton from 'components/buttons/TertiaryNeutral.jsx';

class TertiaryNeutralButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'tertiary neutral button';
	};

	render() {
		return (
			<div id='tertiary-neutral-button'>
				<div ref='text' className='text'></div>
				<TertiaryNeutralButton onClick={ this.onClick }>
					Tertiary Neutral Button
				</TertiaryNeutralButton>
			</div>
		);
	}
}

ReactDOM.render(<TertiaryNeutralButtonTest />, document.getElementById('test'));
