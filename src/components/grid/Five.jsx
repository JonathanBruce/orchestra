/* global React */

import Component from 'components/extensions/Component.jsx';

class Five extends Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<div className='grid-5'>
				{ this.props.children }
			</div>
		);
	}
}

export default Five;