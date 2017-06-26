/* global React */

import classnames from 'classnames';

class Stat extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
		number: React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.string
		]),
		value: React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.string
		]),
		widgets: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element
		])
	};

	static defaultProps = {
		name: ''
	};

	render() {
		const {
			number,
			name,
			value,
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
		const valueClasses = classnames('value', adjustTop);

		return (
			<div className={ orchStatClasses }>
				<div className='stat'>
					<div className={ valueClasses }>{ number || value }</div>
					{ name && <div className={ nameClasses }>{ name }</div> }
				</div>

				{ widgets && <div className='widgets'>{ widgets }</div> }
			</div>
		);
	}
}

export default Stat;