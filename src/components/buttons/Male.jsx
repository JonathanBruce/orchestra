/* global React */

import BaseButton from 'components/base/Button.jsx';

class MaleButton extends React.Component {
	static propTypes = {
		className: React.PropTypes.string,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<BaseButton className='male'>MALE</BaseButton>
		);
	}
}

export default MaleButton;