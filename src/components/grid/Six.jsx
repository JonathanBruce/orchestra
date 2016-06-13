/* global React */

import Component from 'components/extensions/Component.jsx';

class Six extends Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<div className='grid-6'>
				{ this.props.children }
			</div>
		);
	}
}

export default Six;