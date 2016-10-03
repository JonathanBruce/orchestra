/* global React */

import FullButton from 'components/base/FullButton.jsx';

class FullSecondaryButton extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<FullButton { ...this.props } className='secondary'>{ this.props.children }</FullButton>
		);
	}
}

export default FullSecondaryButton;