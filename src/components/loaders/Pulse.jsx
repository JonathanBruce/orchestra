/* global React */

class PulseLoader extends React.Component {
	static propTypes = {
		prompt: React.PropTypes.string,
		size: React.PropTypes.number
	};

	render() {
		const { prompt, size } = this.props;
		const pulseStyles = {
			height: size,
			width: size
		};

		return (
			<div className='orch-pulse-loading'>
				{
					prompt
					&& (
						<div className='loading-text'>
							{ prompt }
						</div>
					)
				}
				<div className='sk-spinner sk-spinner-pulse' style={ pulseStyles }></div>
			</div>
		);
	}
}

export default PulseLoader;