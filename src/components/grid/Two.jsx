/* global React */

import Component from 'components/extensions/Component.jsx';

class Two extends Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<div className='grid-2'>
				{ this.props.children }
			</div>
		);
	}
}

export default Two;