/* global React */

import classnames from 'classnames';

class Menu extends React.Component {
	static propTypes = {
		options: React.PropTypes.arrayOf(
			React.PropTypes.shape({
				label: React.PropTypes.string,
				value: React.PropTypes.any.isRequired
			})
		).isRequired,
		onChange: React.PropTypes.func.isRequired,
		onMenuLeave: React.PropTypes.func,
		onToggle: React.PropTypes.func.isRequired,
		selected: React.PropTypes.any
	};

	static defaultProps = {
		active: false,
		options: []
	}

	/**
	 * Passes event to onMenuLeave
	 */
	onMenuLeave = (event) => {
		const { onMenuLeave } = this.props;

		onMenuLeave(event);
	}

	/**
	 * Pass selected value to the select handler
	 * @param selected value which was selected
	 */
	onOptionChange = (selected) => {
		const { onChange, onToggle } = this.props;

		onChange(selected);
		onToggle();
	};

	render() {
		const { options } = this.props;
		const optionsClasses = classnames('options', {
			scrollbar: options.length > 3
		});

		return (
			<div className='orch-menu' onMouseLeave={ this.onMenuLeave }>
				<div className={ optionsClasses } ref='menu'>
					{
						options.map((option, index) => (
							<div
								onClick={ this.onOptionChange.bind(this, option.value) }
								key={ index }>
								{ option.label }
							</div>
						))
					}
				</div>
			</div>
		);
	}
}

export default Menu;