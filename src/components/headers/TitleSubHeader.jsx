/* global React */

import Component from 'components/extensions/Component.jsx';
import SubHeader from 'components/base/SubHeader.jsx';

class TitleSubHeader extends Component {
	static propTypes = {
		title: React.PropTypes.string.isRequired
	};

	render() {
		const { title } = this.props;

		return (
			<SubHeader className='orch-title-sub-header'>
				{ title }
			</SubHeader>
		);
	}
}

export default TitleSubHeader;