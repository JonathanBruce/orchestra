/* global React */

import ActionDropDown from 'components/base/ActionDropDown.jsx';
import classnames from 'classnames';
import Icons from 'icons/_all';
import RESOURCE_ACTION_DROPDOWN from 'constants/RESOURCE_ACTION_DROPDOWN';
import { toUpperCaseFirstCharacter } from 'lib/string';

class ValueActionDropDown extends React.Component {
	static propTypes = {
		state: React.PropTypes.string.isRequired
	};

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

	render() {
		const { onToggle, state } = this.props;
		const actionDropDownClasses = classnames('resource-action', {
			[ state ]: true
		});
		const { icon, text } = this.renderState(state);

		return (
			<ActionDropDown
				className={ actionDropDownClasses }
				onToggle={ onToggle }>
				<div className='icon'>
					{ icon }
				</div>

				<div className='state'>
					{ text }
				</div>

				<div className='chevron'>
					<Icons.Chevron />
				</div>
			</ActionDropDown>
		);
	}
}

export default ValueActionDropDown;