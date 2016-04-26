/* global React */

import Component from 'components/extensions/Component.jsx';

class PrimaryButton extends Component {
	static propTypes = {
		className: React.PropTypes.string,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<button { ...this.props } className={ this.mergeClasses('primary', this.props.className) }>
				{ this.props.children }
			</button>
		);
	}
}

export default PrimaryButton;