/* global React */

import Component from 'components/extensions/Component.jsx';
import classnames from 'classnames';

class SubHeader extends Component {
	static propTypes = {
		className: React.PropTypes.string,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		])
	};

	render() {
		const { children } = this.props;
		const classes = classnames({
			'orch-sub-header': true
		});

		return (
			<div className={ this.mergeClasses(classes, this.props.className) }>
				{ children }
			</div>
		);
	}
}

export default SubHeader;