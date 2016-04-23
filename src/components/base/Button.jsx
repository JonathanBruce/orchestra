/* global React */

class Button extends React.Component {
	static propTypes = {
		className: React.PropTypes.string,
		children: React.PropTypes.func.required
	};

	render() {
		const { className } = this.props;

		return (
			<button className={ className || '' }>
				{ this.props.children }
			</button>
		);
	}
}

export default Button;