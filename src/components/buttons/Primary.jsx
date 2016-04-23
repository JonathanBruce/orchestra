/* global React */

import BaseButton from 'components/base/Button.jsx';

class PrimaryButton extends React.Component {
	static propTypes = {
		className: React.PropTypes.string,
		children: React.PropTypes.func.required
	};

	render() {
		return (
			<BaseButton className='primary'>{ this.props.children }</BaseButton>
		);
	}
}

export default PrimaryButton;