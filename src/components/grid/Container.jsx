/* global React */

import Component from 'components/extensions/Component.jsx';

class Container extends Component {
	static propTypes = {
		className: React.PropTypes.string,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		])
	};

	render() {
		const { className } = this.props;

		return (
			<div className={ this.mergeClasses('orch-container-12 clearfix', className) }>
				{ this.props.children }
			</div>
		);
	}
}

export default Container;