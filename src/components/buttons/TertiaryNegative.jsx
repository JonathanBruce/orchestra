/* global React */

import TertiaryButton from 'components/base/TertiaryButton.jsx';

class TertiaryNegativeButton extends React.Component {
	static propTypes = {
		children: React.PropTypes.element.isRequired
	};

	componentDidMount() {
		console.warn('TertiaryNegativeButton has been deprecated and should be replaced with PartialTertiaryButton');
	}

	render() {
		return (
			<TertiaryButton { ...this.props } className='negative'>{ this.props.children }</TertiaryButton>
		);
	}
}

export default TertiaryNegativeButton;