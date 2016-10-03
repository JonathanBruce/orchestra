/* global React */

import FullButton from 'components/base/FullButton.jsx';

class FullTertiary extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<FullButton { ...this.props } className='tertiary'>{ this.props.children }</FullButton>
		);
	}
}

export default FullTertiary;