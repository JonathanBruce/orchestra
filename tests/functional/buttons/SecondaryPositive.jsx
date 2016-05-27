/* global document, React, ReactDOM */

import 'sass/ui.scss';
import Icons from 'icons/_all';
import SecondaryPositiveButton from 'components/buttons/SecondaryPositive.jsx';

class SecondaryPositiveButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'orch-secondary positive button';
	};

	render() {
		return (
			<div id='secondary-positive-button'>
				<div ref='text' className='text'></div>
				<SecondaryPositiveButton icon={ <Icons.Links /> }
					onClick={ this.onClick }>
					Secondary Positive Button
				</SecondaryPositiveButton>
			</div>
		);
	}
}

ReactDOM.render(<SecondaryPositiveButtonTest />, document.getElementById('test'));
