/* global React */

import ActionMenu from 'components/menus/Action.jsx';
import ActionDropDown from 'components/base/ActionDropDown.jsx';
import classnames from 'classnames';

class ValueActionDropDown extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		]),
		position: React.PropTypes.string,
		title: React.PropTypes.string.isRequired,
		value: React.PropTypes.string
	};

	constructor(props) {
		super(props);

		this.state = {
			open: false
		};
	}

	toggleOpen = () => {
		this.setState({
			open: !this.state.open
		});
	};

	render() {
		const {
			children,
			position,
			title,
			value
		} = this.props;
		const { open } = this.state;
		const valueClasses = classnames('value', {
			'greater-than-zero': (value) && value !== '0'
		});

		return (
			<ActionDropDown
				className='orch-value-action-dropdown'
				onMouseEnter={ this.toggleOpen }
				onMouseLeave={ this.toggleOpen }>
				<div className={ valueClasses }>
					{ value || '0' }
				</div>

				<div className='title'>
					{ title }
				</div>

				{ open && (
					<ActionMenu position={ position }>
						{ children }
					</ActionMenu>
					)
				}
			</ActionDropDown>
		);
	}
}

export default ValueActionDropDown;