/* global React */

import classnames from 'classnames';
import GENERIC_MENU from 'constants/GENERIC_MENU';

class GenericMenu extends React.Component {
	static propTypes = {
		options: React.PropTypes.arrayOf(
			React.PropTypes.shape({
				label: React.PropTypes.oneOfType([
					React.PropTypes.string,
					React.PropTypes.object
				]),
				value: React.PropTypes.any.isRequired
			})
		).isRequired,
		onChange: React.PropTypes.func.isRequired,
		onToggle: React.PropTypes.func.isRequired,
		selected: React.PropTypes.any
	};

	static defaultProps = {
		active: false,
		options: []
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
			scrollbar: options.length > GENERIC_MENU.LENGTH
		});

		return (
			<div className='orch-menu orch-generic-menu'>
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

export default GenericMenu;