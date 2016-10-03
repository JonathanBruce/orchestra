/* global React */

import Component from 'components/extensions/Component.jsx';

class PartialButton extends Component {
	static propTypes = {
		className: React.PropTypes.string,
		children: React.PropTypes.element.isRequired
	};

	render() {
		return (
			<button { ...this.props } className={ this.mergeClasses('orch-partial', this.props.className) }>
				{ this.props.children }
			</button>
		);
	}
}

export default PartialButton;