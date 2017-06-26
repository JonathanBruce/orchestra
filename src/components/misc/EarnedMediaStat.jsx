/* global React */
import Stat from 'components/misc/Stat.jsx';

class EarnedMediaStat extends React.Component {
	static propTypes = {
		icon: React.PropTypes.any,
		amount: React.PropTypes.string,
		title: React.PropTypes.string,
		number: React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.string
		])
	};

	renderIcon() {
		const { icon } = this.props;

		if (icon) {
			return (
				<div className='media-icon'>
					{ icon }
				</div>
			);
		}
	}

	renderStat() {
		const { number, title } = this.props;

		return (
			<div className='media-stat'>
				<Stat
					name={ title }
					number={ number } />
			</div>
		);
	}

	renderMediaStat() {
		const { amount } = this.props;

		return (
			<div className='media-earned'>
				<Stat number={ amount } />
			</div>
		);
	}

	render() {
		return (
			<div className='orch-earned-media-stat'>
				{ this.renderStat() }
				{ this.renderIcon() }
				{ this.renderMediaStat() }
			</div>
		);
	}
}

export default EarnedMediaStat;