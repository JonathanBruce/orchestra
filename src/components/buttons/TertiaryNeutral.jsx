/* global React */

import TertiaryButton from 'components/base/TertiaryButton.jsx';

class TertiaryNeutralButton extends React.Component {
	static propTypes = {
		children: React.PropTypes.element.required
	};

	render() {
		return (
			<TertiaryButton { ...this.props } className='neutral'>{ this.props.children }</TertiaryButton>
		);
	}
}

export default TertiaryNeutralButton;