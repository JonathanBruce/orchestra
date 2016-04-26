/* global React */

import PrimaryButton from 'components/base/PrimaryButton.jsx';

class PrimaryNeutralButton extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<PrimaryButton { ...this.props } className='neutral'>{ this.props.children }</PrimaryButton>
		);
	}
}

export default PrimaryNeutralButton;