/* global React */

import Component from 'components/extensions/Component.jsx';
import SubHeader from 'components/base/SubHeader.jsx';

class TitleSubHeader extends Component {
	static propTypes = {
		title: React.PropTypes.string.isRequired,
		widgets: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element
		])
	};

	render() {
		const { title, widgets } = this.props;

		return (
			<SubHeader className='orch-title-sub-header'
				title={ title }
				widgets={ widgets } />
		);
	}
}

export default TitleSubHeader;