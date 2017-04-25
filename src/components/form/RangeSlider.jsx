/* global document, React */

import classNames from 'classnames';
import { getIntervalValue, getRatioValue } from 'lib/math';
import { getElementCursorValue } from 'lib/dom';
import Input from 'components/form/Input.jsx';
import SLIDER from 'constants/SLIDER';

class RangeSlider extends React.Component {
	/**
	 * propType definition
	 * @type {boolean}  disabled     Boolean which determines the availability of the slider. Defaults to false
	 * @type {number}   interval     The incremental step the slider should move by
	 * @type {number}   max          Number representing the highest value the slider can reach
	 * @type {number}   maxDisplay   Value which is set for the right slider's display value.
	 * @type {string}   maxLabel     String value representing the display label for the min value of the slider
	 * @type {number}   maxValue     Value which is set for the right slider's actual value. Parsed for truncation.
	 * @type {number}   min          Number representing the lowest value the slider can reach.
	 * @type {number}   minDisplay   Value which is set for the left slider's display value.
	 * @type {string}   minLabel     String value representing the display label for the max value of the slider
	 * @type {number}   minValue     Value which is set for the left slider's actual value. Parsed for truncation.
	 * @type {function} onDragChange A function which is called when the slider is dragged. The value that slider is pointing to will be passed down
	 * @type {function} onDragEnd    A function that is called when user lets go of the slider. The value of the position where slider ended will be passed down
	 * @type {function} onDragStart  A function that is called when user initiates the drag of the slider. The value of the position where slider started will be passed down
	 * @type {function} onInputStart A function that is called when user clicks on one of the slider inputs. The value of the position where slider started will be passed down
	 * @type {number}   width        Number representing the width of the slider
	 */
	static propTypes = {
		disabled: React.PropTypes.bool,
		interval: React.PropTypes.number,
		max: React.PropTypes.number.isRequired,
		maxDisplay: React.PropTypes.string.isRequired,
		maxLabel: React.PropTypes.string,
		maxValue: React.PropTypes.number.isRequired,
		min: React.PropTypes.number.isRequired,
		minDisplay: React.PropTypes.string.isRequired,
		minLabel: React.PropTypes.string,
		minValue: React.PropTypes.number.isRequired,
		onDragChange: React.PropTypes.func.isRequired,
		onDragEnd: React.PropTypes.func,
		onDragStart: React.PropTypes.func,
		onInputStart: React.PropTypes.func,
		width: React.PropTypes.number
	};

	componentDidMount() {
		this.registerEventListeners();
	}

	componentDidUpdate() {
		this.registerEventListeners();
	}

	componentWillUnmount() {
		document.removeEventListener('mouseup', this.handleDragEnd);
		document.removeEventListener('mousemove', this.handleDragChange);
	}

	static defaultProps = {
		interval: 1,
		minDisplay: 0,
		minValue: 0,
		maxDisplay: 0,
		maxValue: 0,
		width: SLIDER.DEFAULT_WIDTH
	};

	constructor(props) {
		super(props);

		this.eventsAdded = false;
		this.state = {
			drag: false
		};
	}

	/**
	 * Make sure to switch on and off event listeners based on disabled state of the property
	 */
	registerEventListeners() {
		const { disabled } = this.props;

		if (!disabled && !this.eventsAdded) {
			this.eventsAdded = true;

			document.addEventListener('mouseup', this.handleDragEnd);
			document.addEventListener('mousemove', this.handleDragChange);
		}
		else if (disabled && this.eventsAdded) {
			this.eventsAdded = false;

			document.removeEventListener('mouseup', this.handleDragEnd);
			document.removeEventListener('mousemove', this.handleDragChange);
		}
	}

	/**
	 * Get the value from the position the cursor is pointing at
	 * @param {object} event Synthetic Event object
	 */
	getSliderCursorValue(event) {
		const {
			max,
			min,
			width
		} = this.props;
		const { slider } = this.refs;

		return getElementCursorValue(event, slider, {
			max,
			min,
			width
		});
	}

	/**
	 * Handle slider change event
	 * @param {object} event Synthetic Event object
	 */
	handleDragChange = (event) => {
		const { drag } = this.state;

		if (drag) {
			const nextValue = this.getSliderCursorValue(event);

			this.handleChangeEvent(drag, nextValue);
		}
	};

	/**
	 * Handle slider drag start event
	 * @param {object} event Synthetic Event object
	 */
	handleDragStart = (knob, event) => {
		const { drag } = this.state;
		const nextValue = this.getSliderCursorValue(event);

		if (!drag) {
			this.setState({ drag: knob });
			this.handleChangeEvent(knob, nextValue, SLIDER.DRAG_START);
		}
	};

	/**
	 * Handle slider drag end event
	 */
	handleDragEnd = () => {
		const { drag } = this.state;
		const value = this.props[ `${ drag }Value` ];

		if (drag) {
			this.setState({ drag: false });
			this.handleChangeEvent(drag, value, SLIDER.DRAG_END);
		}
	};

	/**
	 * Handle onchange event of the input
	 * @param {string} eventType Defined event type for the slider
	 * @param {object} event     Synthetic Event Object
	 */
	handleInputEvent = (input, eventType, event) => {
		const { keyCode, which, target } = event;
		const keycode = keyCode || which;
		const { value } = target;

		if (keycode === 13) {
			target.blur();
		}
		else {
			this.handleChangeEvent(input, value, eventType);
		}
	};

	/**
	 * Handle all incoming change events
	 * @param {string|number} value     Value relating to the change event
	 * @param {string}        eventType Event type
	 */
	handleChangeEvent = (element, value, eventType) => {
		const {
			disabled,
			interval,
			max,
			maxValue,
			min,
			minValue,
			onDragChange,
			onDragEnd,
			onDragStart,
			onInputStart
		} = this.props;
		const numValue = Number(value);
		let changeEvent;
		const changingValue = this.props[ `${ element }Value` ];
		let invalidChange = false;

		if (element === 'min') {
			invalidChange = numValue > maxValue;
		}
		else {
			invalidChange = numValue < minValue;
		}

		if (invalidChange || disabled) {
			return;
		}

		switch (eventType) {
			case SLIDER.DRAG_END:
			case SLIDER.INPUT_END:
				return onDragEnd && onDragEnd(numValue, element, eventType);
			case SLIDER.DRAG_START:
				changeEvent = onDragStart || onDragChange;
				break;
			case SLIDER.INPUT_START:
				return onInputStart(changingValue, element);
			default:
				changeEvent = onDragChange;
				break;
		}

		const changedValue = eventType === SLIDER.INPUT_CHANGE
			? getRatioValue({
				numerator: numValue,
				denominator: max,
				intercept: min,
				value: max
			})
			: getIntervalValue(numValue, interval);

		if (!isNaN(numValue) && changedValue !== changingValue && changeEvent) {
			changeEvent(changedValue, element, eventType);
		}
	};

	render() {
		const {
			disabled,
			minDisplay,
			minValue,
			max,
			maxLabel,
			minLabel,
			min,
			maxDisplay,
			maxValue,
			width
		} = this.props;
		const { drag } = this.state;
		const currentPositionMin = getRatioValue({
			numerator: minValue,
			denominator: max,
			value: width
		});
		const currentPositionMax = getRatioValue({
			numerator: maxValue,
			denominator: max,
			value: width
		}) - 7;
		const sliderClassnames = classNames('orch-range-slider', 'clearfix', {
			disabled
		});
		const translateValueMin = `translateX(${currentPositionMin}px)`;
		const translateValueMax = `translateX(${currentPositionMax}px)`;
		const minKnobPosition = {
			MozTransform: translateValueMin,
			msTransform: translateValueMin,
			transform: translateValueMin,
			WebkitTransform: translateValueMin
		};
		const maxKnobPosition = {
			MozTransform: translateValueMax,
			msTransform: translateValueMax,
			transform: translateValueMax,
			WebkitTransform: translateValueMax
		};
		const trackWidth = currentPositionMax - currentPositionMin + 7;
		const trackCoverWidth = {
			MozTransform: translateValueMin,
			msTransform: translateValueMin,
			transform: translateValueMin,
			WebkitTransform: translateValueMin,
			width: `${trackWidth}px`
		};
		const minClass = classNames('min', {
			dragging: drag === 'min'
		});
		const maxClass = classNames('max', {
			dragging: drag === 'max'
		});

		return (
			<div className={ sliderClassnames }>
				<label>{ minLabel || min }</label>

				<div className='range' ref='slider' >
					<div className='track' onMouseDown={ !disabled && this.handleDragStart.bind(this, 'track') }>
						<div className='cover' style={ trackCoverWidth } />
					</div>

					<div className={ minClass } style={ minKnobPosition }>
						<div className='knob' onMouseDown={ !disabled && this.handleDragStart.bind(this, 'min') }/>

						<div className='slider-display'>
							<Input
								disabled={ disabled }
								placeholder='0'
								onBlur={ this.handleInputEvent.bind(this, 'min', SLIDER.INPUT_END) }
								onChange={ this.handleInputEvent.bind(this, 'min', SLIDER.INPUT_CHANGE) }
								onFocus={ this.handleInputEvent.bind(this, 'min', SLIDER.INPUT_START) }
								onKeyUp={ this.handleInputEvent.bind(this, 'min', SLIDER.INPUT_KEYPRESS) }
								type='text'
								value={ minDisplay.toString() } />
						</div>
					</div>

					<div className={ maxClass } style={ maxKnobPosition }>
						<div className='knob' onMouseDown={ !disabled && this.handleDragStart.bind(this, 'max') }/>

						<div className='slider-display'>
							<Input
								disabled={ disabled }
								placeholder='0'
								onBlur={ this.handleInputEvent.bind(this, 'max', SLIDER.INPUT_END) }
								onChange={ this.handleInputEvent.bind(this, 'max', SLIDER.INPUT_CHANGE) }
								onFocus={ this.handleInputEvent.bind(this, 'max', SLIDER.INPUT_START) }
								onKeyUp={ this.handleInputEvent.bind(this, 'max', SLIDER.INPUT_KEYPRESS) }
								type='text'
								value={ maxDisplay.toString() } />
						</div>
					</div>
				</div>

				<label>{ maxLabel || max }</label>
			</div>
		);
	}
}

export default RangeSlider;