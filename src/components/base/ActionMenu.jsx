/* global React */

import Component from 'components/extensions/Component.jsx';
import classnames from 'classnames';
import ACTION_MENU from '../../constants/ACTION_MENU';

class ActionMenu extends Component {
	static propTypes = {
		className: React.PropTypes.string,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		]),
		position: React.PropTypes.string
	};

	render() {
		const { position } = this.props;
		const classes = classnames({
			'orch-action-menu': true,
			left: !position || position === ACTION_MENU.LEFT,
			right: position === ACTION_MENU.RIGHT
		});

		return (
			<div { ...this.props } className={ this.mergeClasses(classes, this.props.className) }>
				{ this.props.children }
			</div>
		);
	}
}

export default ActionMenu;