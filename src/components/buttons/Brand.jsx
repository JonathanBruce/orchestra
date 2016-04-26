/* global React */

import PrimaryButton from 'components/base/PrimaryButton.jsx';

class BrandButton extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<PrimaryButton { ...this.props } className='brand'>BRAND</PrimaryButton>
		);
	}
}

export default BrandButton;