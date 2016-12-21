/* global console, React */
/* eslint-disable no-console */

import TertiaryButton from 'components/base/TertiaryButton.jsx';

class TertiaryPositiveButton extends React.Component {
	static propTypes = {
		children: React.PropTypes.element.isRequired
	};

	componentDidMount() {
		console.warn('TertiaryPositiveButton has been deprecated and should be replaced with PartialPrimaryButton');
	}

	render() {
		return (
			<TertiaryButton { ...this.props } className='positive'>{ this.props.children }</TertiaryButton>
		);
	}
}

export default TertiaryPositiveButton;