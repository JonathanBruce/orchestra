/* global React */

import classnames from 'classnames';

class PillToggle extends React.Component {
	static propTypes = {
		items: React.PropTypes.array.isRequired
	};

	renderItems = () => {
		const { items } = this.props;

		return items.map((obj, i) => {
			const { active, value } = obj;
			const itemClasses = classnames({
				active,
				item: true
			});

			return (
				<div className={ itemClasses } key={ i }>
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