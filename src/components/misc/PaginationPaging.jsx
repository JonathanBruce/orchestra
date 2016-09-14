/* global React */

import PaginationControls from './PaginationControls.jsx';

class PaginationPaging extends React.Component {
	static propTypes = {
		currentPage: React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.string
		]).isRequired,
		onDecreaseClick: React.PropTypes.func.isRequired,
		onIncreaseClick: React.PropTypes.func.isRequired,
		totalPages: React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.string
		]).isRequired
	};

	render() {
		const {
			currentPage,
			onDecreaseClick,
			onIncreaseClick,
			totalPages
		} = this.props;
		const decreaseDisabled = currentPage === 1;
		const increaseDisabled = currentPage === totalPages;

		return (
			<div className='orch-pagination-paging'>
				<div className='counts'>
					<span className='current-page'>Page { currentPage }</span>
					<span className='slash'>/</span>
					<span className='total-pages'>{ totalPages }</span>
				</div>

				<PaginationControls
					onDecreaseClick={ onDecreaseClick }
					onIncreaseClick={ onIncreaseClick }
					decreaseDisabled={ decreaseDisabled }
					increaseDisabled={ increaseDisabled } />
			</div>
		);
	}
}

export default PaginationPaging;