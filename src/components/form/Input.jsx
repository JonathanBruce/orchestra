/* global React */

import classnames from 'classnames';

class Input extends React.Component {
	static propTypes = {
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
			disabled,
			error,
			placeholder,
			icon,
			type
		} = this.props;
		const inputClassnames = classnames({
			clearfix: true,
			disabled,
			error,
			input: true,
			secondary: true
		});

		return (
			<div className={ inputClassnames }
				onClick={ this.focus }>
				{ icon }
				<div className='item'>
					<input disabled={ disabled }
						placeholder={ placeholder }
						ref='input'
						type={ type } />
				</div>
			</div>
		);
	}
}

export default Input;