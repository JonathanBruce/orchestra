/* global React */

import MarketingPartialButton from 'components/base/MarketingPartialButton.jsx';

class MarketingFullSecondary extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<MarketingPartialButton { ...this.props } className='primary'>{ this.props.children }</MarketingPartialButton>
		);
	}
}

export default MarketingFullSecondary;