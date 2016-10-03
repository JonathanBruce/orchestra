/* global document, React, ReactDOM */

import 'sass/ui.scss';
import FullSecondaryButton from 'components/buttons/FullSecondary.jsx';

class FullSecondaryButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'orch-full secondary button';
	};

	render() {
		return (
			<div id='full-secondary-button'>
				<span ref='text' className='text'></span>
				<FullSecondaryButton onClick={ this.onClick }>
					Full Secondary Button
				</FullSecondaryButton>
			</div>
		);
	}
}

ReactDOM.render(<FullSecondaryButtonTest />, document.getElementById('test'));
