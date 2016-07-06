/* global React */

import Component from 'components/extensions/Component.jsx';
import classnames from 'classnames';

class Content extends Component {
	static propTypes = {
		bloat: React.PropTypes.boolean,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		]),
		icon: React.PropTypes.element.isRequired,
		title: React.PropTypes.string.isRequired,
		widget: React.PropTypes.element
	};

	render() {
		const {
			bloat,
			icon,
			title,
			widget
		} = this.props;
		const contentClassnames = classnames({
			bloat: bloat && true,
			content: true
		});

		return (
			<div className='orch-content'>
				<header className='clearfix'>
					{ icon }
					<div className='title'>{ title }</div>
					<div className='widget'>{ widget }</div>
				</header>

				<div className={ contentClassnames }>
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default Content;