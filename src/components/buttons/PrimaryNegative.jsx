/* global React */

import PrimaryButton from 'components/base/PrimaryButton.jsx';

class PrimaryNegativeButton extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	componentDidMount() {
		console.warn('PrimaryNegativeButton has been deprecated and should be replaced with FullTertiaryButton');
	}

	render() {
		return (
			<PrimaryButton { ...this.props } className='negative'>{ this.props.children }</PrimaryButton>
		);
	}
}

export default PrimaryNegativeButton;