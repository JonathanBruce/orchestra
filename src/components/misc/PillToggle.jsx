/* global React */

import classnames from 'classnames';

class PillToggle extends React.Component {
	static propTypes = {
		items: React.PropTypes.arrayOf(
			React.PropTypes.shape({
				active: React.PropTypes.bool.isRequired,
				label: React.PropTypes.string.isRequired,
				notifications: React.PropTypes.oneOfType([
					React.PropTypes.array,
					React.PropTypes.number
				]),
				value: React.PropTypes.oneOfType([
					React.PropTypes.string,
					React.PropTypes.number
				]).isRequired
			})
		),
		onClick: React.PropTypes.func.isRequired
	};

	onClick = (value) => {
		const { onClick } = this.props;

		onClick(value);
	};

	renderItems = () => {
		const { items } = this.props;

		return items.map((obj, i) => {
			const {
				active,
				label,
				notifications,
				value
			} = obj;
			const itemClasses = classnames({
				active,
				item: true
			});

			return (
				<div className={ itemClasses }
					key={ i }
					onClick={ !active && this.onClick.bind(this, value) }>
					{ this.renderNotifications(notifications) }
					{ label }
				</div>
			);
		});
	};

	renderNotifications = (notifications = []) => {
		if (notifications.length) {
			const [ count, color ] = notifications;
			const notificationsClasses = classnames({
				[ color ]: true,
				notification: true
			});

			return (
				<div className={ notificationsClasses }>
					{ count }
				</div>
			);
		}

		return null;
	};

	render() {
		return (
			<div className='orch-pill-toggle clearfix'>
				{ this.renderItems() }
			</div>
		);
	}
}

export default PillToggle;