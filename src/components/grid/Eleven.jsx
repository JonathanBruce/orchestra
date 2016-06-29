/* global React */

import Column from 'components/grid/Column.jsx';
import Component from 'components/extensions/Component.jsx';

class Eleven extends Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<Column { ...this.props } size='11'>{ this.props.children }</Column>
		);
	}
}

export default Eleven;