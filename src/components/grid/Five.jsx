/* global React */

import Column from 'components/base/Column.jsx';
import Component from 'components/extensions/Component.jsx';

class Five extends Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<Column { ...this.props } size='5'>{ this.props.children }</Column>
		);
	}
}

export default Five;