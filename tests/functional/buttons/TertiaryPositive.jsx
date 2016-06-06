/* global document, React, ReactDOM */

import 'sass/ui.scss';
import GoBack from 'icons/GoBack.jsx';
import TertiaryPositiveButton from 'components/buttons/TertiaryPositive.jsx';

class TertiaryPositiveButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'orch-tertiary positive button';
	};

	render() {
		return (
			<div id='tertiary-positive-button'>
				<span ref='text' className='text'></span>
				<TertiaryPositiveButton onClick={ this.onClick }>
					<GoBack />
				</TertiaryPositiveButton>
			</div>
		);
	}
}

ReactDOM.render(<TertiaryPositiveButtonTest />, document.getElementById('test'));
