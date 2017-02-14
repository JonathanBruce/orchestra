/* global React */

import Icons from 'icons/_all';

class HighlightTag extends React.Component {
	static propTypes = {
		label: React.PropTypes.string,
		onClose: React.PropTypes.func
	};

	render() {
		const { label, onClose } = this.props;

		return (
			<div className='orch-highlight-tag'>
				<div className='label'>{ label }</div>
				<div className='close' onClick={ onClose }>
					<div className='icon'>
						<Icons.Ex />
					</div>
				</div>
			</div>
		);
	}
}

export default HighlightTag;