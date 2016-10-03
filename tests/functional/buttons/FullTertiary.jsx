/* global document, React, ReactDOM */

import 'sass/ui.scss';
import FullTertiaryButton from 'components/buttons/FullTertiary.jsx';

class FullTertiaryButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'orch-full tertiary button';
	};

	render() {
		return (
			<div id='full-tertiary-button'>
				<span ref='text' className='text'></span>
				<FullTertiaryButton onClick={ this.onClick }>
					Full Tertiary Button
				</FullTertiaryButton>
			</div>
		);
	}
}

ReactDOM.render(<FullTertiaryButtonTest />, document.getElementById('test'));
