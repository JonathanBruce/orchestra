/* global React */

import Component from 'components/extensions/Component.jsx';

class Alert extends Component {
	static propTypes = {
		alert: React.PropTypes.object
	};

	render() {
		const { alert } = this.props;

		return (
			<div { ...this.props } className={ `alert ${alert.kind}` }>
				{ alert.message }
			</div>
		);
	}
}

export default Alert;