/* global document, React, ReactDOM */

import 'sass/ui.scss';
import Icons from 'icons/_all';
import PartialSecondaryButton from 'components/buttons/PartialSecondary.jsx';

class PartialSecondaryButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'orch-partial secondary button';
	};

	render() {
		return (
			<div id='partial-secondary-button'>
				<span ref='text' className='text'></span>
				<PartialSecondaryButton onClick={ this.onClick }>
					<Icons.GoBack />
				</PartialSecondaryButton>
			</div>
		);
	}
}

ReactDOM.render(<PartialSecondaryButtonTest />, document.getElementById('test'));
