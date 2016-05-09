/* global React */

import Component from 'components/extensions/Component.jsx';

class Nine extends Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<div className='grid-9'>
				{ this.props.children }
			</div>
		);
	}
}

export default Nine;