/* global React */

import SecondaryButton from 'components/base/SecondaryButton.jsx';

class SecondaryPositiveButton extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<SecondaryButton { ...this.props } className='positive'>{ this.props.children }</SecondaryButton>
		);
	}
}

export default SecondaryPositiveButton;