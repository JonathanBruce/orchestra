/* global React */

import PrimaryButton from 'components/base/PrimaryButton.jsx';

class MaleButton extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<PrimaryButton { ...this.props } className='male'>MALE</PrimaryButton>
		);
	}
}

export default MaleButton;