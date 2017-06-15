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
		onMenuWidgetToggle: React.PropTypes.func,
		widget: React.PropTypes.object,
		title: React.PropTypes.string.isRequired,
		titleIcon: React.PropTypes.element,
		tooltipTitle: React.PropTypes.string,
		tooltipValue: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		]),
		menuWidget: React.PropTypes.element,
		menuWidgetIcon: React.PropTypes.element,
		menuWidgetOpen: React.PropTypes.bool
	};

	static defaultProps = {
		menuWidgetIcon: <Icons.Search />
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
		const { menuWidget, menuWidgetOpen } = this.props;

		return menuWidget && menuWidgetOpen	&& (
			<div className='widget'>
				{ menuWidget }
			</div>
		);
	}

	renderWidgetIcon() {
		const {
			onMenuWidgetToggle,
			widget,
			menuWidget,
			menuWidgetIcon,
			menuWidgetOpen
		} = this.props;
		const rightArrowClasses = classnames('right-arrow', {
			open: menuWidgetOpen
		});

		if (!menuWidget) {
			return;
		}

		return widget || (
			<div className='widget-icons'>
				<div
					className='icon'
					onClick={ onMenuWidgetToggle }>
					{ menuWidgetIcon }
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