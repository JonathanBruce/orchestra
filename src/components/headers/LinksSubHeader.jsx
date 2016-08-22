/* global React */

import Component from 'components/extensions/Component.jsx';
import SubHeader from 'components/base/SubHeader.jsx';

class LinksSubHeader extends Component {
	static propTypes = {
		children: React.PropTypes.array,
		onClick: React.PropTypes.func.isRequired,
		widgets: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element
		])
	};

	render() {
		const {
			children,
			widgets
		} = this.props;

		return (
			<SubHeader className='orch-links-sub-header' widgets={ widgets }>
				{ children }
			</SubHeader>
		);
	}
}

export default LinksSubHeader;