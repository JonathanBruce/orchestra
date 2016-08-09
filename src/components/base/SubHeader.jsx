/* global React */

import Component from 'components/extensions/Component.jsx';
import classnames from 'classnames';

class SubHeader extends Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		]),
		className: React.PropTypes.string,
		title: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		]),
		widgets: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element
		])
	};

	render() {
		const {
			children,
			title,
			widgets
		} = this.props;
		const classes = classnames({
			clearfix: true,
			'orch-sub-header': true
		});

		return (
			<div className={ this.mergeClasses(classes, this.props.className) }>
				<div className='title'>
					{ children || title }
				</div>

				<div className='widgets'>
					{ widgets }
				</div>
			</div>
		);
	}
}

export default SubHeader;