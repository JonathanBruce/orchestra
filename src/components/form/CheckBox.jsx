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

	onInputChange = () => {
		const {
			checked,
			disabled,
			onClick
		} = this.props;

		if (!disabled) {
			onClick(checked || false);
		}
	};

	render() {
		const {
			checked,
			disabled,
			label
		} = this.props;
		const checkboxClassnames = classnames({
			checkbox: true,
			checked,
			disabled
		});

		return (
			<div className='orch-checkbox'>
				<div className={ checkboxClassnames }>
					<input checked={ checked }
						disabled={ disabled }
						onChange={ this.onInputChange }
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