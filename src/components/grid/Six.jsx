/* global React */

import Column from 'components/grid/Column.jsx';
import Component from 'components/extensions/Component.jsx';

class Six extends Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<Column { ...this.props } size='6'>{ this.props.children }</Column>
		);
	}
}

export default Six;