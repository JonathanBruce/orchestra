/* global React */

import classnames from 'classnames';

class Switch extends React.Component {
	static propTypes = {
		active: React.PropTypes.bool,
		disabled: React.PropTypes.bool,
		onClick: React.PropTypes.func.isRequired
	};

	/**
	 * onClick handler for switch
	 */
	onSwitchClick = () => {
		const {
			active,
			disabled,
			onClick
		} = this.props;

		if (!disabled) {
			onClick(active || false);
		}
	};

	render() {
		const { active, disabled } = this.props;
		const switchClassnames = classnames('orch-switch', {
			active,
			disabled
		});

		return (
			<div className={ switchClassnames } onClick={ this.onSwitchClick }>
				<div className='knob'></div>
				<div className='track'></div>
			</div>
		);
	}
}

export default Switch;