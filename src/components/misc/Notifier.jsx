/* global React */
import classnames from 'classnames';
import Icons from 'icons/_all';

class Notifier extends React.Component {
	/**
	 * propType definition
	 * @type {boolean}  active   Boolean to indicate if notifier has been toggled active
	 * @type {boolean}  disabled Boolean to indicate if the callout is disabled
	 * @type {function} icon     Icon for notifier's display
	 * @type {function} onClick  Function to call when the callout is clicked
	 * @type {number}   value    Number of outstanding items to notify
	 */
	static propTypes = {
		active: React.PropTypes.bool,
		disabled: React.PropTypes.bool,
		icon: React.PropTypes.func.isRequired,
		onClick: React.PropTypes.func,
		value: React.PropTypes.number
	};

	static defaultProps = {
		value: 0
	};

	render() {
		const {
			disabled,
			icon,
			onClick,
			active,
			value
		} = this.props;
		const notifierClasses = classnames('orch-notifier', {
			clearfix: true,
			disabled
		});
		const arrowClasses = classnames({
			'right-arrow': !active,
			'left-arrow': active
		});

		return (
			<div
				className={ notifierClasses }
				onClick={ onClick }>

				<div className='icon'>
					{ icon }

					{
						value > 0
						&& (
							<div className='value'>
								{ value }
							</div>
						)
					}
				</div>

				<div className={ arrowClasses }>
					<Icons.SmallChevron />
				</div>
			</div>
		);
	}
}

export default Notifier;