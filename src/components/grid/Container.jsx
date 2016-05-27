/* global React */

import Component from 'components/extensions/Component.jsx';

class Container extends Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<div className='orch-container-12 clearfix'>
				{ this.props.children }
			</div>
		);
	}
}

export default Container;