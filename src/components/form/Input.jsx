/* global React */

import classnames from 'classnames';

class Input extends React.Component {
	static propTypes = {
		defaultValue: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		error: React.PropTypes.bool,
		icon: React.PropTypes.element,
		placeholder: React.PropTypes.string,
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
	 */
	toggleFocus = () => {
		this.setState({
			focus: !this.state.focus
		});
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