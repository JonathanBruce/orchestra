/* global React */

import ActionDropDown from 'components/base/ActionDropDown.jsx';
import classnames from 'classnames';

class ValueActionDropDown extends React.Component {
	static propTypes = {
		title: React.PropTypes.string.isRequired,
		value: React.PropTypes.string.isRequired
	};

	render() {
		const { title, value } = this.props;
		const valueClasses = classnames('value', {
			'greater-than-zero': value !== '0'
		});

		return (
			<ActionDropDown
				className='value-action'>
				<div className={ valueClasses }>
					{ value }
				</div>

				<div className='title'>
					{ title }
				</div>
			</ActionDropDown>
		);
	}
}

export default ValueActionDropDown;