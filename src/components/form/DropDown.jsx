/* global React, ReactDOM, document */

import classnames from 'classnames';
import Icons from 'icons/_all';
import Menu from './Menu.jsx';

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
	hideMenu = (event) => {
		const { active } = this.props;
		const menuNode = ReactDOM.findDOMNode(this.menu);
		const menuOptionsNode = menuNode && menuNode.children[ 0 ];
		const { target } = event;

		if (menuOptionsNode && !menuOptionsNode.contains(target) && active) {
			this.toggleAndRemoveHideMenuListener();
		}
	};

	/**
	 * Shows the dropdown
	 */
	showMenu = () => {
		const { active, onToggle } = this.props;

		if (!active) {
			onToggle();
			document.body.addEventListener('click', this.hideMenu);
		}
	};

	/**
	 * Toggles onToggle prop and removes hideMenu listener
	 */
	toggleAndRemoveHideMenuListener = () => {
		const { onToggle } = this.props;

		onToggle();
		document.body.removeEventListener('click', this.hideMenu);
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
			<div className='selector' onClick={ this.showMenu }>
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
		const {
			active,
			disabled,
			onChange,
			options,
			selected
		} = this.props;
		const classes = classnames('orch-dropdown', {
			disabled,
			active
		});

		return (
			<div className={ classes }>
				{ this.renderSelector() }
				{ active && <Menu options={ options }
					ref={
						(menu) => {
							this.menu = menu;
						}
					}
					onChange={ onChange }
					onToggle={ this.toggleAndRemoveHideMenuListener }
					selected={ selected } /> }
			</div>
		);
	}
}

export default DropDown;