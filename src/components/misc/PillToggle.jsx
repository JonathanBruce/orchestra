/* global React */

import classnames from 'classnames';

class PillToggle extends React.Component {
	static propTypes = {
		items: React.PropTypes.object.isRequired,
		onClick: React.PropTypes.func.isRequired
	};

	onClick = (value) => {
		const { onClick } = this.props;

		onClick(value);
	};

	renderItems = () => {
		const { items } = this.props;
		const keys = Object.keys(items);

		return keys.map((value, i) => {
			const item = items[ value ];
			const { active, notifications } = item;
			const itemClasses = classnames({
				active,
				item: true
			});

			return (
				<div className={ itemClasses }
					key={ i }
					onClick={ !active && this.onClick.bind(this, value) }>
					{ this.renderNotifications(notifications) }
					{ value }
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