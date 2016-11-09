/* global React */

import Component from 'components/extensions/Component.jsx';
import classnames from 'classnames';

class MarketingButton extends Component {
	static propTypes = {
		active: React.PropTypes.bool,
		className: React.PropTypes.string,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		const classes = classnames({
			active: this.props.active,
			'orch-marketing-partial': true
		});

		return (
			<button { ...this.props } className={ this.mergeClasses(classes, this.props.className) }>
				{ this.props.children }
			</button>
		);
	}
}

export default MarketingButton;