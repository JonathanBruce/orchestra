/* global document, React, ReactDOM */

import 'sass/ui.scss';
import Icons from 'icons/_all';
import PartialPrimaryButton from 'components/buttons/PartialPrimary.jsx';

class PartialPrimaryButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'orch-partial primary button';
	};

	render() {
		return (
			<div id='partial-primary-button'>
				<span ref='text' className='text'></span>
				<PartialPrimaryButton onClick={ this.onClick }>
					<Icons.GoBack />
				</PartialPrimaryButton>
			</div>
		);
	}
}

ReactDOM.render(<PartialPrimaryButtonTest />, document.getElementById('test'));
