/* global React */

import Component from 'components/extensions/Component.jsx';

class Eight extends Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<div className='grid-8'>
				{ this.props.children }
			</div>
		);
	}
}

export default Eight;