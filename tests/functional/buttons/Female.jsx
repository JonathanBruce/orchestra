/* global document, React, ReactDOM */

import 'sass/ui.scss';
import FemaleButton from 'components/buttons/Female.jsx';

class FemaleButtonTest extends React.Component {
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
			<div id='female-button'>
				<FemaleButton active={ this.state.active }
					onClick={ this.onClick } />
			</div>
		);
	}
}

ReactDOM.render(<FemaleButtonTest />, document.getElementById('test'));