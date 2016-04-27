/* global React */

import SecondaryButton from 'components/base/SecondaryButton.jsx';

class SecondaryNeutralButton extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<SecondaryButton { ...this.props } className='neutral'>{ this.props.children }</SecondaryButton>
		);
	}
}

export default SecondaryNeutralButton;