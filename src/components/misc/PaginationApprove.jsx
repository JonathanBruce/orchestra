/* global React */

import classnames from 'classnames';
import Icons from 'icons/_all';
import PaginationControls from './PaginationControls.jsx';

class PaginationApprove extends React.Component {
	static propTypes = {
		approveDisabled: React.PropTypes.bool.isRequired,
		currentPage: React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.string
		]).isRequired,
		onApproveClick: React.PropTypes.func.isRequired,
		onDecreaseClick: React.PropTypes.func.isRequired,
		onIncreaseClick: React.PropTypes.func.isRequired,
		totalPages: React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.string
		]).isRequired
	};

	render() {
		const {
			approveDisabled,
			currentPage,
			onApproveClick,
			onDecreaseClick,
			onIncreaseClick,
			totalPages
		} = this.props;
		const approveClasses = classnames({
			approve: true,
			disabled: approveDisabled
		});
		const pageNumber = currentPage || 1;
		const decreaseDisabled = pageNumber === 1;
		const increaseDisabled = pageNumber === totalPages;

		return (
			<div className='orch-pagination-approve'>
				<div className='counts'>
					<span className='current-page'>Page { pageNumber }</span>
					<span className='slash'>/</span>
					<span className='total-pages'>{ totalPages }</span>
				</div>

				<PaginationControls
					onDecreaseClick={ onDecreaseClick }
					onIncreaseClick={ onIncreaseClick }
					decreaseDisabled={ decreaseDisabled }
					increaseDisabled={ increaseDisabled } />

				<div className={ approveClasses }
					onClick={ onApproveClick }>
					<Icons.ApproveAll />
				</div>
			</div>
		);
	}
}

export default PaginationApprove;