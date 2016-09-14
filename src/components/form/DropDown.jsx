/* global React, document */

import classnames from 'classnames';
import Icons from 'icons/_all';

class DropDown extends React.Component {
	static propTypes = {
		active: React.PropTypes.bool,
		disabled: React.PropTypes.bool,
		options: React.PropTypes.arrayOf(
			React.PropTypes.shape({
				label: React.PropTypes.string,
				value: React.PropTypes.any.isRequired
			})
		).isRequired,
		label: React.PropTypes.string,
		onChange: React.PropTypes.func.isRequired,
		onToggle: React.PropTypes.func.isRequired,
		selected: React.PropTypes.any
	};

	static defaultProps = {
		active: false,
		options: [],
		disabled: false
	}

	/**
	 * Hides the dropdown list
	 * @param event Event object
	 */
	hideList = (event) => {
		const { active, onToggle } = this.props;
		const { options } = this.refs;
		const { target } = event;

		if (!options.contains(target) && active) {
			onToggle();
			document.body.removeEventListener('click', this.hideList);
		}
	};

	/**
	 * Pass selected value to the select handler
	 * @param selected value which was selected
	 */
	onOptionChange = (selected) => {
		const { onChange, onToggle } = this.props;

		onChange(selected);
		onToggle();
	};

	/**
	 * Shows the dropdown
	 */
	showList = () => {
		const { active, onToggle } = this.props;

		if (!active) {
			onToggle();
			document.body.addEventListener('click', this.hideList);
		}
	}

	/**
	 * Render options for dropdown
	 * @returns {ReactElement} ReactElement
	 */
	renderDropDownOptions = () => {
		const { options } = this.props;

		return (
			<div className='list'>
				<div className='options' ref='options'>
					{
						options.map((option, index) => (
							<div key={ index } onClick={ this.onOptionChange.bind(this, option.value) }>
								{ option.label }
							</div>
						))
					}
				</div>
			</div>
		);
	};

	/**
	 * Render Dropdown Button
	 * @returns {ReactElement} ReactElement
	 */
	renderSelector = () => {
		const {
			active,
			options,
			label,
			selected
		} = this.props;
		const currentOption = options.find((option) => (option.value === selected));
		const currentLabel = label || currentOption && currentOption.label;
		const currentText = currentOption && !active ? currentOption.label : currentLabel;

		return (
			<div className='selector' onClick={ this.showList }>
				<div className='text'>
					{ currentText }
				</div>

				<div className='chevron'>
					<Icons.Chevron />
				</div>
			</div>
		);
	};

	render() {
		const { active, disabled } = this.props;
		const classes = classnames('orch-dropdown', {
			disabled,
			active
		});

		return (
			<div className={ classes }>
				{ this.renderSelector() }
				{ active && this.renderDropDownOptions() }
			</div>
		);
	}
}

export default DropDown;