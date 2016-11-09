/* global React */

import MarketingFullButton from 'components/base/MarketingFullButton.jsx';

class MarketingFullPrimary extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<MarketingFullButton { ...this.props } className='primary'>{ this.props.children }</MarketingFullButton>
		);
	}
}

export default MarketingFullPrimary;