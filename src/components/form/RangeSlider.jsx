/* global document, React */

import classNames from 'classnames';
import { getIntervalValue, getRatioValue } from 'lib/math';
import { getElementCursorValue } from 'lib/dom';
import Input from 'components/form/Input.jsx';
import SLIDER from 'constants/SLIDER';
import { shortenNumber, unshortenNumber } from 'lib/string';

class RangeSlider extends React.Component {
	/**
	 * propType definition
	 * @type {boolean}  disabled         Boolean which determines the availability of the slider. Defaults to false
	 * @type {number}   interval         The incremental step the slider should move by
	 * @type {number}   max              Number representing the highest value the slider can reach
	 * @type {number}   maxDisplay       Value which is set for the right slider's display value.
	 * @type {string}   maxLabel         String value representing the display label for the min value of the slider
	 * @type {number}   maxValue         Value which is set for the right slider's actual value. Parsed for truncation.
	 * @type {number}   min              Number representing the lowest value the slider can reach.
	 * @type {number}   minDisplay       Value which is set for the left slider's display value.
	 * @type {string}   minLabel         String value representing the display label for the max value of the slider
	 * @type {number}   minValue         Value which is set for the left slider's actual value. Parsed for truncation.
	 * @type {function} onDragChange     A function which is called when the slider is dragged. The value that slider is pointing to will be passed down
	 * @type {function} onDragEnd        A function that is called when user lets go of the slider. The value of the position where slider ended will be passed down
	 * @type {function} onDragStart      A function that is called when user initiates the drag of the slider. The value of the position where slider started will be passed down
	 * @type {function} onDragStart      A function that is called when user initiates the drag of the slider. The value of the position where slider started will be passed down
	 * @type {number}   width            Number representing the width of the slider
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
		minDisplay: '0',
		minValue: 0,
		maxDisplay: '0',
		maxValue: 0,
		width: SLIDER.DEFAULT_WIDTH
	};

	constructor(props) {
		super(props);

		const {
			maxDisplay,
			maxValue,
			minDisplay,
			minValue
		} = this.props;

		this.eventsAdded = false;
		this.state = {
			maxDisplay,
			maxValue,
			minDisplay,
			minValue,
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

		event.preventDefault();

		if (drag) {
			const nextValue = this.getSliderCursorValue(event);

			this.handleChangeEvent(drag, nextValue, SLIDER.DRAG_CHANGE);
		}
	};

	/**
	 * Handle slider drag start event
	 * @param {object} event Synthetic Event object
	 */
	handleDragStart = (knob, nextValue) => {
		const { drag } = this.state;

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
		const value = this.state[ `${ drag }Value` ];

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
		const numValue = value ? unshortenNumber(value) : 0;

		if (keycode === 13 && eventType === SLIDER.INPUT_KEYPRESS) {
			target.blur();
		}
		else {
			this.setState({ [ `${input}Display` ]: numValue });
			this.handleChangeEvent(input, numValue, eventType);
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
			min
		} = this.props;
		let numValue = Number(value);

		if (numValue > max) {
			numValue = max;
		}
		else if (numValue < min) {
			numValue = min;
		}

		const changingValue = this.state[ `${ element }Value` ];
		const changedValue = eventType === SLIDER.INPUT_CHANGE
			? getRatioValue({
				numerator: numValue,
				denominator: max,
				intercept: min,
				value: max
			})
			: getIntervalValue(numValue, interval);

		if (disabled) {
			return;
		}

		switch (eventType) {
			case SLIDER.DRAG_END:
			case SLIDER.INPUT_END:
			case SLIDER.INPUT_START:
				this.setDragValues(changingValue, element, eventType);

				break;
			default:
				this.setDragValues(changedValue, element, eventType);

				break;
		}
	};

	/**
	 * Handle mouse down event to determine if it is the max or min knob user is changing
	 */
	handleMouseDownEvent = (event) => {
		const {
			[ 'max-input' ]: maxInput,
			[ 'min-input' ]: minInput
		} = this.refs;
		const { target } = event;
		const inputClicked = maxInput.contains(target)
			|| maxInput === target
			|| minInput.contains(target)
			|| minInput === target;

		if (inputClicked) {
			return;
		}

		const { minValue, maxValue } = this.state;
		const nextValue = this.getSliderCursorValue(event);
		let knobType;

		if (nextValue > maxValue) {
			knobType = SLIDER.RANGE_MAX;
		}
		else if (nextValue < minValue) {
			knobType = SLIDER.RANGE_MIN;
		}
		else {
			const maxRange = Math.abs(maxValue - nextValue);
			const minRange = Math.abs(minValue - nextValue);

			knobType = (maxRange < minRange) ? SLIDER.RANGE_MAX : SLIDER.RANGE_MIN;
		}

		this.handleDragStart(knobType, nextValue);
	};

	/**
	 * Determine if the number passed in is going past the range set by its respected knob
	 * @param  {number}  num      Number to check its range
	 * @param  {string}  knobType Knob Type
	 * @return {boolean}          Indicator to check if the number exceeds its appropriate range
	 */
	invalidMinMaxRange = (num, knobType) => {
		const { maxValue, minValue } = this.state;

		if (knobType === SLIDER.RANGE_MAX) {
			return num <= minValue;
		}

		if (knobType === SLIDER.RANGE_MIN) {
			return num >= maxValue;
		}

		return false;
	};

	/**
	 * Set in-component drag values
	 * @param {number} value     Drag Value
	 * @param {string} knobType  Knob type
	 * @param {string} eventType Event Type
	 */
	setDragValues = (value, knobType, eventType) => {
		const {
			onDragChange,
			onDragEnd,
			onDragStart
		} = this.props;
		const displayValue = shortenNumber(value);
		const exceedsBounds = this.invalidMinMaxRange(value, knobType);
		const notDragEnd = eventType !== SLIDER.DRAG_END && eventType !== SLIDER.INPUT_END;
		const updatedState = {
			[ `${knobType}Value` ]: value
		};
		let callback;

		if (exceedsBounds && notDragEnd) {
			return;
		}

		switch (eventType) {
			case SLIDER.DRAG_START:
				callback = onDragStart;
				Object.assign(updatedState, {
					[ `${knobType}Display` ]: displayValue
				});

				break;
			case SLIDER.DRAG_CHANGE:
				callback = onDragChange;
				Object.assign(updatedState, {
					[ `${knobType}Display` ]: displayValue
				});

				break;
			case SLIDER.DRAG_END:
			case SLIDER.INPUT_END:
				callback = onDragEnd;
				Object.assign(updatedState, {
					[ `${knobType}Display` ]: displayValue
				});

				break;
			default:
				break;
		}

		if (callback) {
			callback(value, knobType);
		}

		this.setState(updatedState);
	};

	render() {
		const {
			disabled,
			max,
			maxLabel,
			minLabel,
			min,
			width
		} = this.props;
		const {
			drag,
			maxDisplay,
			maxValue,
			minDisplay,
			minValue
		} = this.state;
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
		const minClass = classNames(`range-${SLIDER.RANGE_MIN}`, {
			dragging: drag === SLIDER.RANGE_MIN
		});
		const maxClass = classNames(`range-${SLIDER.RANGE_MAX}`, {
			dragging: drag === SLIDER.RANGE_MAX
		});

		return (
			<div className={ sliderClassnames }>
				<label>{ minLabel || min }</label>

				<div
					className='range'
					ref='slider'
					onMouseDown={ !disabled && this.handleMouseDownEvent }>
					<div className='track'>
						<div className='cover' style={ trackCoverWidth } />
					</div>

					<div className={ minClass } style={ minKnobPosition }>
						<div className='knob' />

						<div className='slider-display' ref='min-input'>
							<Input
								disabled={ disabled }
								placeholder='0'
								onBlur={ this.handleInputEvent.bind(this, SLIDER.RANGE_MIN, SLIDER.INPUT_END) }
								onChange={ this.handleInputEvent.bind(this, SLIDER.RANGE_MIN, SLIDER.INPUT_CHANGE) }
								onFocus={ this.handleInputEvent.bind(this, SLIDER.RANGE_MIN, SLIDER.INPUT_START) }
								onKeyUp={ this.handleInputEvent.bind(this, SLIDER.RANGE_MIN, SLIDER.INPUT_KEYPRESS) }
								type='text'
								value={ minDisplay } />
						</div>
					</div>

					<div className={ maxClass } style={ maxKnobPosition }>
						<div className='knob' />

						<div className='slider-display' ref='max-input'>
							<Input
								disabled={ disabled }
								placeholder='0'
								onBlur={ this.handleInputEvent.bind(this, SLIDER.RANGE_MAX, SLIDER.INPUT_END) }
								onChange={ this.handleInputEvent.bind(this, SLIDER.RANGE_MAX, SLIDER.INPUT_CHANGE) }
								onFocus={ this.handleInputEvent.bind(this, SLIDER.RANGE_MAX, SLIDER.INPUT_START) }
								onKeyUp={ this.handleInputEvent.bind(this, SLIDER.RANGE_MAX, SLIDER.INPUT_KEYPRESS) }
								type='text'
								value={ maxDisplay } />
						</div>
					</div>
				</div>

				<label>{ maxLabel || max }</label>
			</div>
		);
	}
}

export default RangeSlider;