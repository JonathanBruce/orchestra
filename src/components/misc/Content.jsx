/* global React */

import Component from 'components/extensions/Component.jsx';

class Content extends Component {
	static propTypes = {
		icon: React.PropTypes.element.isRequired,
		title: React.PropTypes.string.isRequired,
		widget: React.PropTypes.element
	};

	render() {
		const {
			icon,
			title,
			widget
		} = this.props;

		return (
			<div className='orch-content'>
				<header className='clearfix'>
					{ icon }
					<div className='title'>{ title }</div>
					<div className='widget'>{ widget }</div>
				</header>

				{ this.props.children }
			</div>
		);
	}
}

export default Content;