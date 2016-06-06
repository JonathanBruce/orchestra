/* global document, React, ReactDOM */

import 'sass/ui.scss';
import Icons from 'icons/_all';
import SecondaryNeutralButton from 'components/buttons/SecondaryNeutral.jsx';

class SecondaryNeutralButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'orch-secondary neutral button';
	};

	render() {
		return (
			<div id='secondary-neutral-button'>
				<span ref='text' className='text'></span>
				<SecondaryNeutralButton icon={ <Icons.Links /> }
					onClick={ this.onClick }>
					Secondary Neutral Button
				</SecondaryNeutralButton>
			</div>
		);
	}
}

ReactDOM.render(<SecondaryNeutralButtonTest />, document.getElementById('test'));
