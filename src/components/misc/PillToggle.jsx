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
			const { active } = item;
			const itemClasses = classnames({
				active,
				item: true
			});

			return (
				<div className={ itemClasses }
					key={ i }
					onClick={ !active && this.onClick.bind(this, value) }>
					{ value }
				</div>
			);
		});
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