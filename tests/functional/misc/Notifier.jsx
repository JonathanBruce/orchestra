/* global document, React, ReactDOM */

import 'sass/ui.scss';
import Notifier from 'components/misc/Notifier.jsx';
import Icons from 'icons/_all';

class NotifierTest extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false
		};
	}

	handleClick = () => {
		this.setState({ clicked: true });
	}

	render() {
		const { clicked } = this.state;

		return (
			<div id='notifier'>
				<div className='inactive'>
					<Notifier
						disabled
						icon={ <Icons.AdvancedSearch /> }
						onClick={ this.handleClick }
						value={ 0 } />
				</div>

				<div className='active'>
					<Notifier
						icon={ <Icons.AdvancedSearch /> }
						onClick={ this.handleClick }
						value={ 3 } />
				</div>

				<div id='clicked'>
					{ clicked ? 'Clicked!' : 'Not Clicked' }
				</div>
			</div>
		);
	}
}

ReactDOM.render(<NotifierTest />, document.getElementById('test'));