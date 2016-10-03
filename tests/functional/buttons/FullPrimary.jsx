/* global document, React, ReactDOM */

import 'sass/ui.scss';
import FullPrimaryButton from 'components/buttons/FullPrimary.jsx';

class FullPrimaryButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'orch-full primary button';
	};

	render() {
		return (
			<div id='full-primary-button'>
				<span ref='text' className='text'></span>
				<FullPrimaryButton onClick={ this.onClick }>
					Full Primary Button
				</FullPrimaryButton>
			</div>
		);
	}
}

ReactDOM.render(<FullPrimaryButtonTest />, document.getElementById('test'));
