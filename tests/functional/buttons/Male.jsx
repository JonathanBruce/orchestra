/* global document, React, ReactDOM */

import 'sass/ui.scss';
import MaleButton from 'components/buttons/Male.jsx';

class MaleButtonTest extends React.Component {
	constructor() {
		super();

		this.state = {
			active: false
		};
	}

	onClick = () => {
		this.setState({
			active: !this.state.active
		});
	};

	render() {
		return (
			<div id='male-button'>
				<MaleButton active={ this.state.active }
					onClick={ this.onClick } />
			</div>
		);
	}
}

ReactDOM.render(<MaleButtonTest />, document.getElementById('test'));