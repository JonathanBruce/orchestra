/* global React */

import TertiaryButton from 'components/base/TertiaryButton.jsx';

class TertiaryNeutralButton extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<TertiaryButton { ...this.props } className='neutral'>{ this.props.children }</TertiaryButton>
		);
	}
}

export default TertiaryNeutralButton;