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
			<button { ...this.props } className={ this.mergeClasses('secondary', this.props.className) }>
				{ this.props.icon } <span className='text'>{ this.props.children }</span>
			</button>
		);
	}
}

export default SecondaryButton;