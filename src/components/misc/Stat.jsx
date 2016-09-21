/* global React */

class Stat extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
		number: React.PropTypes.number
	};

	render() {
		const { number, name } = this.props;

		return (
			<div className='orch-stat'>
				<div className='number'>{ number }</div>
				<div className='name'>{ name }</div>
			</div>
		);
	}
}

export default Stat;