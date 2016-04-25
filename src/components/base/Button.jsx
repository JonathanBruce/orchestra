/* global React */

class Button extends React.Component {
	static propTypes = {
		className: React.PropTypes.string,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		])
	};

	render() {
		return (
			<button { ...this.props }>
				{ this.props.children }
			</button>
		);
	}
}

export default Button;