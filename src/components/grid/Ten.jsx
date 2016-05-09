/* global React */

import Component from 'components/extensions/Component.jsx';

class Ten extends Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<div className='grid-10'>
				{ this.props.children }
			</div>
		);
	}
}

export default Ten;