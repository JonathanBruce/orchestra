/* global React */

import classnames from 'classnames';
import INPUT from 'constants/INPUT';
import { isFunction } from 'lib/core';

class Input extends React.Component {
	static propTypes = {
		defaultValue: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		error: React.PropTypes.bool,
		icon: React.PropTypes.element,
		onBlur: React.PropTypes.func,
		onFocus: React.PropTypes.func,
		placeholder: React.PropTypes.string.isRequired,
		type: React.PropTypes.string.isRequired
	};

	constructor() {
		super();

		this.state = {
			focus: false
		};
	}

	/**
	 * Focuses input when container is clicked
	 */
	onContainerClick = () => {
		const { input } = this.refs;

		input.focus();
	};

	/**
	 * Toggles local focus state
	 * @param {object} event Synthetic Event Object
	 */
	toggleFocus = (event) => {
		const { onBlur, onFocus } = this.props;
		const { type } = event;

		this.setState({
			focus: !this.state.focus
		});

		switch (type) {
			case INPUT.FOCUS:
				return isFunction(onFocus) && onFocus(event);
			case INPUT.BLUR:
				return isFunction(onBlur) && onBlur(event);
			default:
				break;
		}
	};

	render() {
		const {
			icon,
			...props
		} = this.props;
		const containerClassnames = classnames({
			clearfix: true,
			disabled: props.disabled,
			focus: this.state.focus,
			error: props.error,
			'orch-input': true,
			'orch-secondary': true
		});

		return (
			<div className={ containerClassnames }
				onClick={ this.onContainerClick }>
				{ icon }
				<div className='item'>
					<input { ...props }
					onBlur={ this.toggleFocus }
					onFocus={ this.toggleFocus }
					ref='input' />
				</div>
			</div>
		);
	}
}

export default Input;