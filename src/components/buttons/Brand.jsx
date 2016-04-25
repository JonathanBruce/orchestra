/* global React */

import BaseButton from 'components/base/Button.jsx';

class BrandButton extends React.Component {
	static propTypes = {
		className: React.PropTypes.string,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<BaseButton { ...this.props } className='brand'>BRAND</BaseButton>
		);
	}
}

export default BrandButton;