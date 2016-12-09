/* global console, React */
/* eslint-disable no-console */

import SecondaryButton from 'components/base/SecondaryButton.jsx';

class SecondaryPositiveButton extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	componentDidMount() {
		console.warn('SecondaryPositiveButton has been deprecated and should be replaced with FullTertiaryButton');
	}

	render() {
		return (
			<SecondaryButton { ...this.props } className='positive'>{ this.props.children }</SecondaryButton>
		);
	}
}

export default SecondaryPositiveButton;