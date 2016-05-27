/* global React */

import Component from 'components/extensions/Component.jsx';

class SecondaryButton extends Component {
	static propTypes = {
		className: React.PropTypes.string,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		]),
		icon: React.PropTypes.any
	};

	render() {
		return (
			<button { ...this.props } className={ this.mergeClasses('orch-secondary clearfix', this.props.className) }>
				{ this.props.icon }
				<div className='text'>{ this.props.children }</div>
			</button>
		);
	}
}

export default SecondaryButton;