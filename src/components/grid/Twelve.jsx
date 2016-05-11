/* global React */

import Component from 'components/extensions/Component.jsx';

class Twelve extends Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<div className='grid-12'>
				{ this.props.children }
			</div>
		);
	}
}

export default Twelve;