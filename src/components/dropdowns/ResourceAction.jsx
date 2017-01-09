/* global React */

import ActionDropDown from 'components/base/ActionDropDown.jsx';
import ActionMenu from 'components/base/ActionMenu.jsx';
import classnames from 'classnames';
import Icons from 'icons/_all';
import RESOURCE_ACTION_DROPDOWN from 'constants/RESOURCE_ACTION_DROPDOWN';
import { toUpperCaseFirstCharacter } from 'lib/string';

class ResourceActionDropDown extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		]),
		position: React.PropTypes.string,
		state: React.PropTypes.string.isRequired
	};

	constructor(props) {
		super(props);

		this.state = {
			open: false
		};
	}

	renderState = () => {
		const { state } = this.props;

		switch (state) {
			case RESOURCE_ACTION_DROPDOWN.SAVED:
				return {
					icon: (
						<Icons.SavedCloud />
					),
					text: toUpperCaseFirstCharacter(state) + '!'
				};
			case RESOURCE_ACTION_DROPDOWN.UPDATE:
				return {
					icon: (
						<Icons.UpdateCloud />
					),
					text: toUpperCaseFirstCharacter(state)
				};
			case RESOURCE_ACTION_DROPDOWN.SAVE:
			default:
				return {
					icon: (
						<Icons.Cloud />
					),
					text: toUpperCaseFirstCharacter(state)
				};
		}
	};

	toggleOpen = () => {
		this.setState({
			open: !this.state.open
		});
	};

	render() {
		const {
			children,
			position,
			state
		} = this.props;
		const resourceActionDropDownClasses = classnames('orch-resource-action-dropdown', {
			[ state ]: true
		});
		const { open } = this.state;
		const { icon, text } = this.renderState(state);

		return (
			<ActionDropDown
				className={ resourceActionDropDownClasses }
				onMouseEnter={ this.toggleOpen }
				onMouseLeave={ this.toggleOpen }>
				<div className='icon'>
					{ icon }
				</div>

				<div className='state'>
					{ text }
				</div>

				{ open && (
					<ActionMenu position={ position }>
						{ children }
					</ActionMenu>
					)
				}
			</ActionDropDown>
		);
	}
}

export default ResourceActionDropDown;