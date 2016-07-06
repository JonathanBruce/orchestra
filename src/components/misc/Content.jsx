/* global React, ReactDOM */

import Component from 'components/extensions/Component.jsx';
import classnames from 'classnames';
import { scrollBottom } from 'lib/dom';

let onScrollBottomBind;

class Content extends Component {
	static propTypes = {
		bloat: React.PropTypes.bool,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element,
			React.PropTypes.string
		]),
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
			bloat,
			icon,
			title,
			widget
		} = this.props;
		const contentClassnames = classnames({
			bloat: bloat && true,
			content: true
		});

		return (
			<div className='orch-content'>
				<header className='clearfix'>
					{ icon }
					<div className='title'>{ title }</div>
					<div className='widget'>{ widget }</div>
				</header>

				<div className={ contentClassnames } ref='content'>
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default Content;