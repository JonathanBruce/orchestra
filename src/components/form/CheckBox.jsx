/* global React */

import classnames from 'classnames';

class CheckBox extends React.Component {
	static propTypes = {
		checked: React.PropTypes.bool,
		disabled: React.PropTypes.bool,
		onClick: React.PropTypes.func
	};

	constructor(props) {
		super(props);

		this.state = {
			checked: props.checked || false
		};
	}

	onInputClick = () => {
		this.setState({
			checked: !this.state.checked
		});
	};

	render() {
		const { checked, disabled } = this.props;
		const containerClassnames = classnames({
			checked: checked || this.state.checked,
			disabled,
			'orch-checkbox': true
		});

		return (
			<div className={ containerClassnames } onClick={ this.onInputClick }>
				<input checked={ checked } type='checkbox' />
			</div>
		);
	}
}

export default CheckBox;