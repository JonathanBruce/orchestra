/* global React */

import FullButton from 'components/base/FullButton.jsx';

class FullPrimaryButton extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<FullButton { ...this.props } className='primary'>{ this.props.children }</FullButton>
		);
	}
}

export default FullPrimaryButton;