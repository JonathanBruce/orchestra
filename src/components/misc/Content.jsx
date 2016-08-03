/* global React, ReactDOM */

import Component from 'components/extensions/Component.jsx';
import { scrollBottom } from 'lib/dom';

let onScrollBottomBind;

class Content extends Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		]),
		icon: React.PropTypes.element.isRequired,
		onScrollBottom: React.PropTypes.func,
		subHeader: React.PropTypes.string,
		title: React.PropTypes.string.isRequired,
		widget: React.PropTypes.element
	};

	componentDidMount() {
		const { onScrollBottom } = this.props;

		if (onScrollBottom) {
			const { content } = this.refs;
			const contentNode = ReactDOM.findDOMNode(content);

			onScrollBottomBind = scrollBottom.bind(null, contentNode, onScrollBottom);

			contentNode.addEventListener('scroll', onScrollBottomBind);
		}
	}

	componentWillUnmount() {
		const { onScrollBottom } = this.props;

		if (onScrollBottom) {
			const { content } = this.refs;
			const contentNode = ReactDOM.findDOMNode(content);

			contentNode.removeEventListener('scroll', onScrollBottomBind);
		}
	}

	render() {
		const {
			icon,
			subHeader,
			title,
			widget
		} = this.props;

		return (
			<div className='orch-content'>
				<header className='clearfix'>
					{ icon }
					<div className='title'>{ title }</div>
					<div className='widget'>{ widget }</div>
				</header>

				{ subHeader && <div className='sub-header'>{ subHeader }</div> }

				<div className='content' ref='content'>
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default Content;