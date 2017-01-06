/* global React */

import Component from 'components/extensions/Component.jsx';
import classnames from 'classnames';
import Icons from 'icons/_all';

class ActionDropDown extends Component {
	static propTypes = {
		className: React.PropTypes.string,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		const classes = classnames({
			'orch-action-dropdown': true
		});

		return (
			<div { ...this.props } className={ this.mergeClasses(classes, this.props.className) }>
				{ this.props.children }

				<div className='chevron'>
					<Icons.Chevron />
				</div>
			</div>
		);
	}
}

export default ActionDropDown;