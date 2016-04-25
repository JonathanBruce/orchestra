/* global React */

import BaseButton from 'components/base/Button.jsx';

class ActionButton extends React.Component {
	static propTypes = {
		className: React.PropTypes.string,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<BaseButton { ...this.props } className='action'>{ this.props.children }</BaseButton>
		);
	}
}

export default ActionButton;