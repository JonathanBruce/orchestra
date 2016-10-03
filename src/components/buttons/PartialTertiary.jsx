/* global React */

import PartialButton from 'components/base/PartialButton.jsx';

class PartialTertiary extends React.Component {
	static propTypes = {
		children: React.PropTypes.element.isRequired
	};

	render() {
		return (
			<PartialButton { ...this.props } className='tertiary'>{ this.props.children }</PartialButton>
		);
	}
}

export default PartialTertiary;