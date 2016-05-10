/* global React */

import Component from 'components/extensions/Component.jsx';

class Four extends Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<div className='grid-4'>
				{ this.props.children }
			</div>
		);
	}
}

export default Four;