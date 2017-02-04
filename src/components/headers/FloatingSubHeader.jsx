/* global document, React, window */

import classnames from 'classnames';
import Component from 'components/extensions/Component.jsx';
import SubHeader from 'components/base/SubHeader.jsx';

class FloatingSubHeader extends Component {
	static propTypes = {
		children: React.PropTypes.array,
		fixed: React.PropTypes.bool
	};

	componentWillMount() {
		this.setState({
			initialPosition: true,
			floating: false,
			position: 0
		});
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	constructor() {
		super();
	}

	/**
	 * Determines whether to float the subheader bar based on scroll
	 */
	onScroll = () => {
		const { fixed } = this.props;
		const { scrollTop } = document.body;
		const { floating, initialPosition, position } = this.state;
		const scrollDown = scrollTop > position;
		const initialScroll = position === 0 && scrollTop > 0 && initialPosition;

		if (!fixed) {
			if (scrollDown && !floating && !initialScroll) {
				this.setFloating(true);
			}
			else if ((!scrollDown && floating) || scrollTop === 0) {
				this.setFloating(false);
			}

			this.setState({
				position: scrollTop
			});
		}
	};

	/**
	 * Sets the current floating state for the header
	 */
	setFloating = (value) => {
		this.setState({
			initialPosition: false,
			floating: value
		});
	}

	render() {
		const {	children } = this.props;
		const { initialPosition, floating } = this.state;

		const subheaderStyle = classnames('orch-floating-sub-header', {
			init: initialPosition,
			floating: floating && !initialPosition
		});

		return (
			<SubHeader className={ subheaderStyle }>
				{ children }
			</SubHeader>
		);
	}
}

export default FloatingSubHeader;