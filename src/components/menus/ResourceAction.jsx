/* global React */

import ActionMenu from 'components/base/ActionMenu.jsx';
import FullSecondaryButton from '../buttons/FullSecondary.jsx';
import FullTertiaryButton from '../buttons/FullTertiary.jsx';
import Input from '../form/Input.jsx';

class ResourceActionMenu extends React.Component {
	static propTypes = {
		placeholder: React.PropTypes.string.isRequired,
		title: React.PropTypes.string.isRequired
	};

	render() {
		const { placeholder, title } = this.props;

		return (
			<ActionMenu
				className='resource-action clearfix'>
				<div className='title'>{ title }</div>

				<Input placeholder={ placeholder } />

				<div className='buttons'>
					<FullTertiaryButton>Cancel</FullTertiaryButton>
					<FullSecondaryButton>Save</FullSecondaryButton>
				</div>
			</ActionMenu>
		);
	}
}

export default ResourceActionMenu;