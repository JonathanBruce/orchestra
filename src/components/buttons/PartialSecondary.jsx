/* global React */

import PartialButton from 'components/base/PartialButton.jsx';

class PartialSecondary extends React.Component {
	static propTypes = {
		children: React.PropTypes.element.isRequired
	};

	render() {
		return (
			<PartialButton { ...this.props } className='secondary'>{ this.props.children }</PartialButton>
		);
	}
}

export default PartialSecondary;