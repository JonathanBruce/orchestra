/* global React */

import classnames from 'classnames';
import Icons from 'icons/_all';
import Info from '../misc/Info.jsx';

class FilterBox extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element
		]).isRequired,
		onWidgetToggle: React.PropTypes.func,
		replacementWidget: React.PropTypes.object,
		title: React.PropTypes.string.isRequired,
		titleIcon: React.PropTypes.element,
		tooltipTitle: React.PropTypes.string,
		tooltipValue: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		]),
		widget: React.PropTypes.element,
		widgetIcon: React.PropTypes.element,
		widgetOpen: React.PropTypes.bool
	};

	static defaultProps = {
		widgetIcon: <Icons.Search />
	};

	renderHeader() {
		const {
			title,
			titleIcon,
			tooltipTitle,
			tooltipValue
		} = this.props;

		const infoStyle = classnames('info', {
			'no-title-icon': !titleIcon
		});

		return (
			<div className='header'>
				<div className='title-icon'>{ titleIcon }</div>
				<div className='title'>{ title }</div>

				{
					tooltipTitle && (
						<div className={ infoStyle }>
							<Info title={ tooltipTitle } value={ tooltipValue } />
						</div>
					)
				}

				{ this.renderWidgetIcon() }
			</div>
		);
	}

	renderWidget() {
		const { widget, widgetOpen } = this.props;

		return widget && widgetOpen	&& (
			<div className='widget'>
				{ widget }
			</div>
		);
	}

	renderWidgetIcon() {
		const {
			onWidgetToggle,
			replacementWidget,
			widget,
			widgetIcon,
			widgetOpen
		} = this.props;
		const rightArrowClasses = classnames('right-arrow', {
			open: widgetOpen
		});

		if (!widget) {
			return;
		}

		return replacementWidget || (
			<div className='widget-icons'>
				<div
					className='icon'
					onClick={ onWidgetToggle }>
					{ widgetIcon }
				</div>

				<div className={ rightArrowClasses }>
					<Icons.SmallChevron />
				</div>
			</div>
		);
	}

	render() {
		const { children } = this.props;

		return (
			<div className='orch-filter-box'>
				{ this.renderHeader() }
				{ this.renderWidget() }

				<div className='items'>
					{ children }
				</div>
			</div>
        );
	}
}

export default FilterBox;