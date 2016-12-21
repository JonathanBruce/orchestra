/* global React */

import classnames from 'classnames';
import Icons from 'icons/_all';
import Info from '../misc/Info.jsx';

class FilterBox extends React.Component {
	static propTypes = {
		children: React.PropTypes.element,
		onWidgetToggle: React.PropTypes.func,
		title: React.PropTypes.string.isRequired,
		titleIcon: React.PropTypes.element,
		tooltipTitle: React.PropTypes.string,
		tooltipValue: React.PropTypes.string,
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
			tooltipTitle,
			tooltipValue
		} = this.props;

		return (
			<div className='header'>
				<div className='title'>{ title }</div>

				{
					tooltipTitle && (
						<div className='info'>
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
			widget,
			widgetIcon,
			widgetOpen
		} = this.props;
		const leftArrowClasses = classnames('left-arrow', {
			disabled: !widgetOpen
		});
		const rightArrowClasses = classnames('right-arrow', {
			disabled: widgetOpen
		});

		return widget && (
			<div className='widget-icons'>
				<div className={ leftArrowClasses }>
					<Icons.SmallChevron />
				</div>

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