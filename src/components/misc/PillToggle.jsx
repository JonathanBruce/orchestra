/* global React */

import classnames from 'classnames';

class PillToggle extends React.Component {
	static propTypes = {
		items: React.PropTypes.object.isRequired
	};

	renderItems = () => {
		const { items } = this.props;

		return Object.keys(items).map((value, i) => {
			const item = items[ value ];
			const { active, onClick } = item;
			const itemClasses = classnames({
				active,
				item: true
			});

			return (
				<div className={ itemClasses }
					key={ i }
					onClick={ !active && onClick }>
					{ value }
				</div>
			);
		});
	};

	render() {
		return (
			<div className='pill-toggle clearfix'>
				{ this.renderItems() }
			</div>
		);
	}
}

export default PillToggle;