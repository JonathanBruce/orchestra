/* global React */

class PulseLoader extends React.Component {
	static propTypes = {
		size: React.PropTypes.number
	};

	render() {
		const { size } = this.props;
		const pulseStyles = {
			height: size,
			width: size
		};

		return (
			<div className='sk-spinner sk-spinner-pulse' style={ pulseStyles }></div>
		);
	}
}

export default PulseLoader;