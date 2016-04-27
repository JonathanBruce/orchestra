/* global React */

import TertiaryButton from 'components/base/TertiaryButton.jsx';

class TertiaryNegativeButton extends React.Component {
	static propTypes = {
		children: React.PropTypes.element
	};

	render() {
		return (
			<TertiaryButton { ...this.props } className='negative'>{ this.props.children }</TertiaryButton>
		);
	}
}

export default TertiaryNegativeButton;