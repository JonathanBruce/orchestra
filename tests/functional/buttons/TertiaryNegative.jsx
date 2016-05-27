/* global document, React, ReactDOM */

import 'sass/ui.scss';
import Icons from 'icons/_all';
import TertiaryNegativeButton from 'components/buttons/TertiaryNegative.jsx';

class TertiaryNegativeButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'orch-tertiary negative button';
	};

	render() {
		return (
			<div id='tertiary-negative-button'>
				<div ref='text' className='text'></div>
				<TertiaryNegativeButton onClick={ this.onClick }>
					<Icons.GoBack />
				</TertiaryNegativeButton>
			</div>
		);
	}
}

ReactDOM.render(<TertiaryNegativeButtonTest />, document.getElementById('test'));
