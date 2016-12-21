/* global React */

import Icons from 'icons/_all';

class Info extends React.Component {
	static propTypes = {
		title: React.PropTypes.string.isRequired,
		value: React.PropTypes.string.isRequired
	};

	constructor(props) {
		super(props);

		this.state = {
			open: false
		};
	}

	/**
	 * Responsible for setting whether the tooltip is displayed
	 * If a parameter is supplied, that will override the current state, otherwise the current state is toggled
	 */
	setOpen = () => {
		this.setState({ open: !this.state.open });
	}

	render() {
		const { open } = this.state;
		const { title, value } = this.props;

		return (
			<div className='orch-info'>
				<div
					className='icon'
					onClick={ this.setOpen }>
					<Icons.Information />
				</div>
				{
					open && (
						<div className='tooltip'>
							<div className='title'>{ title }</div>
							<div className='value' >{ value }</div>
						</div>
					)
				}
			</div>
		);
	}
}

export default Info;