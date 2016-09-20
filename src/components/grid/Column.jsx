/* global React */

import Component from 'components/extensions/Component.jsx';
import classnames from 'classnames';

class Column extends Component {
	static propTypes = {
		alpha: React.PropTypes.boolean,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		]).isRequired,
		className: React.PropTypes.string,
		omega: React.PropTypes.boolean,
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
			className,
			omega,
			size
		} = this.props;
		const columnsClassnames = classnames({
			alpha,
			omega,
			[ 'orch-column' ]: true,
			[ `grid-${size}` ]: size
		});

		return (
			<div className={ this.mergeClasses(columnsClassnames, className) }>{ this.props.children }</div>
		);
	}
}

export default Column;