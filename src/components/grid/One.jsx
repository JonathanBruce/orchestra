/* global React */

import Component from 'components/extensions/Component.jsx';

class One extends Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<div className='grid-1'>
				{ this.props.children }
			</div>
		);
	}
}

export default One;