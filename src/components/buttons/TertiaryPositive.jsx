/* global React */

import TertiaryButton from 'components/base/TertiaryButton.jsx';

class TertiaryPositiveButton extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<TertiaryButton { ...this.props } className='positive'>{ this.props.children }</TertiaryButton>
		);
	}
}

export default TertiaryPositiveButton;