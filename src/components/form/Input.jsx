/* global React */

import classnames from 'classnames';

class Input extends React.Component {
	static propTypes = {
		defaultValue: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		error: React.PropTypes.bool,
		icon: React.PropTypes.element.isRequired,
		placeholder: React.PropTypes.string.isRequired,
		type: React.PropTypes.string.isRequired
	};

	focus = () => {
		const { input } = this.refs;

		input.focus();
	};

	render() {
		const {
			icon,
			...props
		} = this.props;
		const inputClassnames = classnames({
			clearfix: true,
			disabled: props.disabled,
			error: props.error,
			input: true,
			secondary: true
		});

		return (
			<div className={ inputClassnames }
				onClick={ this.focus }>
				{ icon }
				<div className='item'>
					<input { ...props } ref='input' />
				</div>
			</div>
		);
	}
}

export default Input;