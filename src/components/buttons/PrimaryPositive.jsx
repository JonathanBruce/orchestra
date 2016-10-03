/* global React */

import PrimaryButton from 'components/base/PrimaryButton.jsx';

class PrimaryPositiveButton extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	componentDidMount() {
		console.warn('PrimaryPositiveButton has been deprecated and should be replaced with FullPrimaryButton');
	}

	render() {
		return (
			<PrimaryButton { ...this.props } className='positive'>{ this.props.children }</PrimaryButton>
		);
	}
}

export default PrimaryPositiveButton;