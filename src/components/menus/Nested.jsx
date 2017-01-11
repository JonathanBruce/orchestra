/* global React */

import classnames from 'classnames';
import Icons from 'icons/_all';

class NestedMenu extends React.Component {
	static propTypes = {
		options: React.PropTypes.arrayOf(
			React.PropTypes.shape({
				icon: React.PropTypes.element.isRequired,
				label: React.PropTypes.string.isRequired,
				widget: React.PropTypes.element,
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

	constructor(props) {
		super(props);

		this.state = {
			open: false
		};
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

	/**
	 * Toggles nested menu items open
	 */
	toggleOpen = () => {
		this.setState({
			open: !this.state.open
		});
	};

	render() {
		const { onMenuLeave, options } = this.props;
		const { open } = this.state;
		const optionsClasses = classnames('options', {
			scrollbar: options.length > 3
		});

		return (
			<div className='orch-nested-menu' onMouseLeave={ onMenuLeave && this.onMenuLeave }>
				<div className={ optionsClasses } ref='menu'>
					{
						options.map((option, index) => (
							option.widget
							? (
								<div
									onMouseEnter={ this.toggleOpen }
									onMouseLeave={ this.toggleOpen }
									key={ index }>
									{ option.icon }
									{ option.label }

									{
										option.widget && (
											<div className='chevron'>
												<Icons.Chevron />
											</div>
										)
									}

									{ open && (
											<div className='widget'>
												{ option.widget }
											</div>
										)
									}
								</div>
							)
							: (
								<div
									onClick={ this.onOptionChange.bind(this, option.value) }
									key={ index }>
									{ option.icon }
									{ option.label }
								</div>
							)
						))
					}
				</div>
			</div>
		);
	}
}

export default NestedMenu;