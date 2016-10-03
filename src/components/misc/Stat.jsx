/* global React */

import classnames from 'classnames';

class Stat extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
		number: React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.string
		]),
		widgets: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element
		])
	};

	render() {
		const {
			number,
			name,
			widgets
		} = this.props;
		const adjustTop = {
			'adjust-top': name.length > 16 && widgets
		};
		const orchStatClasses = classnames('orch-stat', {
			clearfix: widgets,
			'with-widgets': widgets
		});
		const nameClasses = classnames('name', adjustTop);
		const numberClasses = classnames('number', adjustTop);

		return (
			<div className={ orchStatClasses }>
				<div className='stat'>
					<div className={ numberClasses }>{ number }</div>
					<div className={ nameClasses }>{ name }</div>
				</div>

				{ widgets && <div className='widgets'>{ widgets }</div> }
			</div>
		);
	}
}

export default Stat;