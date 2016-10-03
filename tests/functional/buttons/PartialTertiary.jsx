/* global document, React, ReactDOM */

import 'sass/ui.scss';
import Icons from 'icons/_all';
import PartialTertiaryButton from 'components/buttons/PartialTertiary.jsx';

class PartialTertiaryButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'orch-partial tertiary button';
	};

	render() {
		return (
			<div id='partial-tertiary-button'>
				<span ref='text' className='text'></span>
				<PartialTertiaryButton onClick={ this.onClick }>
					<Icons.GoBack />
				</PartialTertiaryButton>
			</div>
		);
	}
}

ReactDOM.render(<PartialTertiaryButtonTest />, document.getElementById('test'));
