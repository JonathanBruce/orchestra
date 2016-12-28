/* global document, React */

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
	 * Hides the current tooltip if clicking outside the icon and tooltip window
	 * The icon check is performed due to containers potentially containing the tooltip node ref
	 * @param {object} event Synthetic DOM event
	 */
	hideInfo = (event) => {
		const { target } = event;
		const { open } = this.state;
		const { tooltip, icon } = this.refs;
		const domClick = tooltip && !tooltip.contains(target) && !icon.contains(target);

		if (domClick && open) {
			this.toggleInfo();
		}
	}

	/**
	 * Responsible for setting whether the tooltip is displayed
	 * If a parameter is supplied, that will override the current state, otherwise the current state is toggled
	 */
	toggleInfo = () => {
		const { open } = this.state;

		if (open) {
			document.body.removeEventListener('click', this.hideInfo);
		}
		else {
			document.body.addEventListener('click', this.hideInfo);
		}

		this.setState({ open: !open });
	}

	render() {
		const { open } = this.state;
		const { title, value } = this.props;

		return (
			<div className='orch-info'>
				<div
					className='icon'
					onClick={ this.toggleInfo }
					ref='icon'>
					<Icons.Information />
				</div>
				{
					open && (
						<div className='tooltip' ref='tooltip'>
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