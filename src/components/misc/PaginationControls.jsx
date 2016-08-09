/* global React */

import classnames from 'classnames';
import Icons from 'icons/_all';

class PaginationControls extends React.Component {
	static propTypes = {
		onDecreaseClick: React.PropTypes.func.isRequired,
		onIncreaseClick: React.PropTypes.func.isRequired,
		decreaseDisabled: React.PropTypes.bool.isRequired,
		increaseDisabled: React.PropTypes.bool.isRequired
	};

	render() {
		const {
			onDecreaseClick,
			onIncreaseClick,
			decreaseDisabled,
			increaseDisabled
		} = this.props;
		const decreaseArrowClasses = classnames({
			disabled: decreaseDisabled,
			decrease: true
		});
		const increaseArrowClasses = classnames({
			disabled: increaseDisabled,
			increase: true
		});

		return (
			<div className='orch-pagination-controls'>
				<div className={ decreaseArrowClasses }
					onClick={ !decreaseDisabled && onDecreaseClick }>
					<Icons.Chevron />
				</div>

				<div className={ increaseArrowClasses }
					onClick={ !increaseDisabled && onIncreaseClick }>
					<Icons.Chevron />
				</div>
			</div>
		);
	}
}

export default PaginationControls;