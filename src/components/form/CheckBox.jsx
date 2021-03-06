/* global React */

import classnames from 'classnames';
import Checkmark from 'icons/Checkmark.jsx';

class CheckBox extends React.Component {
	static propTypes = {
		checked: React.PropTypes.bool,
		disabled: React.PropTypes.bool,
		label: React.PropTypes.string,
		onClick: React.PropTypes.func.isRequired
	};

	onInputChange = (event) => {
		const {
			checked,
			disabled,
			onClick
		} = this.props;

		if (!disabled) {
			onClick(checked || false, event);
		}
	};

	render() {
		const {
			checked,
			disabled,
			label,
			...props
		} = this.props;
		const checkboxClassnames = classnames({
			checkbox: true,
			checked,
			disabled
		});

		return (
			<div className='orch-checkbox'>
				<div className={ checkboxClassnames }>
					<input
						{ ...props }
						checked={ checked }
						disabled={ disabled }
						onClick={ this.onInputChange }
						ref='input'
						type='checkbox' />
					{ checked && <Checkmark onClick={ this.onInputChange } /> }
				</div>

				<label onClick={ this.onInputChange }>{ label }</label>
			</div>
		);
	}
}

export default CheckBox;