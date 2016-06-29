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

	constructor(props) {
		super(props);

		this.state = {
			checked: props.checked || false
		};
	}

	onInputChange = () => {
		const { onClick, disabled } = this.props;

		if (!disabled) {
			this.setState({
				checked: !this.state.checked
			}, () => {
				onClick(this.state.checked);
			});
		}
	};

	render() {
		const { disabled, label } = this.props;
		const { checked } = this.state;
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