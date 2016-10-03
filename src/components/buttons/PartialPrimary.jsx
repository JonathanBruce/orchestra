/* global React */

import PartialButton from 'components/base/PartialButton.jsx';

class PartialPrimary extends React.Component {
	static propTypes = {
		children: React.PropTypes.element.isRequired
	};

	render() {
		return (
			<PartialButton { ...this.props } className='primary'>{ this.props.children }</PartialButton>
		);
	}
}

export default PartialPrimary;