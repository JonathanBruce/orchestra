/* global React */

import Component from 'components/extensions/Component.jsx';
import classnames from 'classnames';

class Column extends Component {
	static propTypes = {
		alpha: React.PropTypes.string,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		]).isRequired,
		omega: React.PropTypes.string,
		size: React.PropTypes.string.isRequired
	};

	componentWillMount() {
		const { alpha, omega } = this.props;

		if (alpha && omega) {
			throw new Error('Added both alpha and omega to Column component');
		}
	}

	render() {
		const {
			alpha,
			omega,
			size
		} = this.props;
		const columnsClassnames = classnames({
			alpha,
			omega,
			[ `grid-${size}` ]: size
		});

		return (
			<div className={ columnsClassnames }>{ this.props.children }</div>
		);
	}
}

export default Column;