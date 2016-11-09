/* global React */

import MarketingFullButton from 'components/base/MarketingFullButton.jsx';

class MarketingFullSecondary extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<MarketingFullButton { ...this.props } className='secondary'>{ this.props.children }</MarketingFullButton>
		);
	}
}

export default MarketingFullSecondary;