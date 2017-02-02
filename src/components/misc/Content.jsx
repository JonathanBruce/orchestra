/* global React, ReactDOM */

import classnames from 'classnames';
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
		height: React.PropTypes.string,
		icon: React.PropTypes.element.isRequired,
		onScrollBottom: React.PropTypes.func,
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
			children,
			icon,
			height,
			title,
			widget
		} = this.props;
		const contentStyles = {
			height,
			maxHeight: height
		};
		const contentClasses = classnames('content', {
			overflow: !!height
		});

		return (
			<div className='orch-content'>
				<header className='clearfix'>
					{ icon }
					<div className='title'>{ title }</div>
					<div className='widget'>{ widget }</div>
				</header>

				<div
					className={ contentClasses }
					ref='content'
					style={ contentStyles }>
					{ children }
				</div>
			</div>
		);
	}
}

export default Content;