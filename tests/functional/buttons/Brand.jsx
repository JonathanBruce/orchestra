/* eslint-disable */
/* global document, React, ReactDOM, window */

import 'sass/ui.scss';
import BrandButton from 'components/buttons/Brand.jsx';

class BrandButtonTest extends React.Component {
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
			<div id='brand-button'>
				<BrandButton active={ this.state.active }
					onClick={ this.onClick } />
			</div>
		);
	}
}

ReactDOM.render(<BrandButtonTest />, document.getElementById('test'));