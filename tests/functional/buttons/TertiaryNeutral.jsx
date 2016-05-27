/* global document, React, ReactDOM */

import 'sass/ui.scss';
import Icons from 'icons/_all';
import TertiaryNeutralButton from 'components/buttons/TertiaryNeutral.jsx';

class TertiaryNeutralButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'orch-tertiary neutral button';
	};

	render() {
		return (
			<div id='tertiary-neutral-button'>
				<div ref='text' className='text'></div>
				<TertiaryNeutralButton onClick={ this.onClick }>
					<Icons.GoBack />
				</TertiaryNeutralButton>
			</div>
		);
	}
}

ReactDOM.render(<TertiaryNeutralButtonTest />, document.getElementById('test'));
