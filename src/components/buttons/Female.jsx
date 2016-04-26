/* global React */

import PrimaryButton from 'components/base/PrimaryButton.jsx';

class FemaleButton extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<PrimaryButton { ...this.props } className='female'>FEMALE</PrimaryButton>
		);
	}
}

export default FemaleButton;