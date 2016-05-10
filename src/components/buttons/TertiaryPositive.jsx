/* global React */

import TertiaryButton from 'components/base/TertiaryButton.jsx';

class TertiaryPositiveButton extends React.Component {
	static propTypes = {
		children: React.PropTypes.element.isRequired
	};

	render() {
		return (
			<TertiaryButton { ...this.props } className='positive'>{ this.props.children }</TertiaryButton>
		);
	}
}

export default TertiaryPositiveButton;