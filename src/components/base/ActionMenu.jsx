/* global React */

import Component from 'components/extensions/Component.jsx';
import classnames from 'classnames';

class ActionMenu extends Component {
	static propTypes = {
		className: React.PropTypes.string,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		const classes = classnames({
			'orch-action-menu': true
		});

		return (
			<div { ...this.props } className={ this.mergeClasses(classes, this.props.className) }>
				{ this.props.children }
			</div>
		);
	}
}

export default ActionMenu;