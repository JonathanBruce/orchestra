/* global document, React, ReactDOM */

import 'sass/ui.scss';
import PrimaryPositiveButton from 'components/buttons/PrimaryPositive.jsx';

class PrimaryPositiveButtonTest extends React.Component {
	onClick = () => {
		const text = this.refs.text;

		text.textContent = 'primary positive button';
	};

	render() {
		return (
			<div id='primary-positive-button'>
				<div ref='text' className='text'></div>
				<PrimaryPositiveButton onClick={ this.onClick }>
					Primary Positive Button
				</PrimaryPositiveButton>
			</div>
		);
	}
}

ReactDOM.render(<PrimaryPositiveButtonTest />, document.getElementById('test'));
