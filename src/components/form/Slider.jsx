/* global document, React */

import classNames from 'classnames';
import {
	getIntervalValue,
	getRatioValue
} from 'lib/math';
import { getElementCursorValue } from 'lib/dom';
import Input from 'components/form/Input.jsx';
import SLIDER from 'constants/SLIDER';

class Slider extends React.Component {
	/**
	 * propType definition
	 * @type {number}   defaultValue  Value which is currently set. Will need to be update `onChange` handler
	 * @type {boolean}  disabled      Boolean which determines the availability of the slider. Defaults to false
	 * @type {number}   interval      The incremental step the slider should move by
	 * @type {string}   label         String value representing the display label value of the slider
	 * @type {number}   max           Number representing the highest value the slider can reach
	 * @type {number}   min           Number representing the lowest value the slider can reach.
	 * @type {function} onDragChange  A function which is called when the slider is dragged. The value that slider is pointing to will be passed down
	 * @type {function} onDragEnd     A function that is called when user lets go of the slider. The value of the position where slider ended will be passed down
	 * @type {function} onDragStart   A function that is called when user initiates the drag of the slider. The value of the position where slider started will be passed down
	 * @type {function} onInputChange A function that is called when user initiates the modifies the input field.
	 * @type {number}   width         Number representing the width of the slider
	 */
	static propTypes = {
		defaultValue: React.PropTypes.number.isRequired,
		disabled: React.PropTypes.bool,
		interval: React.PropTypes.number,
		label: React.PropTypes.string.isRequired,
		max: React.PropTypes.number.isRequired,
		min: React.PropTypes.number.isRequired,
		onDragChange: React.PropTypes.func.isRequired,
		onDragEnd: React.PropTypes.func,
		onDragStart: React.PropTypes.func,
		onInputChange: React.PropTypes.func,
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
		defaultValue: 0,
		width: SLIDER.DEFAULT_WIDTH
	};

	constructor(props) {
		super(props);

		const { defaultValue } = props;

		this.eventsAdded = false;
		this.state = {
			defaultValue,
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

			this.handleChangeEvent(nextValue, SLIDER.DRAG_CHANGE);
		}
	};

	/**
	 * Handle slider drag start event
	 * @param {object} event Synthetic Event object
	 */
	handleDragStart = (event) => {
		const { drag } = this.state;
		const nextValue = this.getSliderCursorValue(event);

		if (!drag) {
			this.setState({ drag: true });
			this.handleChangeEvent(nextValue, SLIDER.DRAG_START);
		}
	};

	/**
	 * Handle slider drag end event
	 */
	handleDragEnd = () => {
		const { defaultValue, drag } = this.state;

		if (drag) {
			this.setState({ drag: false });
			this.handleChangeEvent(defaultValue, SLIDER.DRAG_END);
		}
	};

	/**
	 * Handle onchange event of the input
	 * @param {string} eventType Defined event type for the slider
	 * @param {object} event     Synthetic Event Object
	 */
	handleInputEvent = (eventType, event) => {
		const { keyCode, which, target } = event;
		const keycode = keyCode || which;
		const { value } = target;

		if (keycode === 13 && eventType === SLIDER.INPUT_KEYPRESS) {
			target.blur();
		}
		else if (eventType === SLIDER.INPUT_CHANGE) {
			this.handleChangeEvent(value, eventType);
		}
	};

	/**
	 * Handle all incoming change events
	 * @param {string|number} value     Value relating to the change event
	 * @param {string}        eventType Event type
	 */
	handleChangeEvent = (value, eventType) => {
		const {
			disabled,
			interval,
			max,
			min,
			onDragEnd,
			onInputChange
		} = this.props;
		const numValue = Number(value);
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
				if (onDragEnd) {
					onDragEnd(numValue);
				}

				break;
			case SLIDER.INPUT_CHANGE:
				this.setDragValues(changedValue, eventType);
				const changeHandler = onInputChange || onDragEnd;

				if (changeHandler) {
					changeHandler(numValue);
				}

				break;
			default:
				this.setDragValues(changedValue, eventType);

				break;
		}
	};

	/**
	 * Set in-component drag values
	 * @param {number} value     Drag Value
	 */
	setDragValues = (value, eventType) => {
		const { onDragChange, onDragEnd } = this.props;
		const isDragChange = eventType === SLIDER.DRAG_CHANGE || eventType === SLIDER.INPUT_CHANGE;
		const isDragEnd = eventType === SLIDER.DRAG_END || eventType === SLIDER.INPUT_END;

		if (isDragChange) {
			onDragChange(value);
		}

		if (isDragEnd) {
			onDragEnd(value);
		}

		this.setState({
			defaultValue: value
		});
	};

	render() {
		const {
			disabled,
			label,
			max,
			width
		} = this.props;
		const { defaultValue } = this.state;
		const currentPosition = getRatioValue({
			numerator: defaultValue,
			denominator: max,
			value: width
		});
		const sliderClassnames = classNames('orch-slider', 'clearfix', {
			disabled
		});
		const translateValue = `translateX(${currentPosition}px)`;
		const knobPosition = {
			MozTransform: translateValue,
			msTransform: translateValue,
			transform: translateValue,
			WebkitTransform: translateValue
		};
		const trackCoverWidth = {
			width: `${currentPosition}px`
		};

		return (
			<div className={ sliderClassnames }>
				<div className='slider' ref='slider' onMouseDown={ !disabled && this.handleDragStart }>
					<div className='track'>
						<div className='cover' style={ trackCoverWidth } />
					</div>

					<div className='knob' style={ knobPosition } />
				</div>
				<div className='slider-display'>
					<Input
						disabled={ disabled }
						placeholder='0'
						onBlur={ this.handleInputEvent.bind(this, SLIDER.INPUT_END) }
						onChange={ this.handleInputEvent.bind(this, SLIDER.INPUT_CHANGE) }
						onKeyUp={ this.handleInputEvent.bind(this, SLIDER.INPUT_KEYPRESS) }
						ref='slider-input'
						type='text'
						value={ defaultValue.toString() } />
					<label>{ label }</label>
				</div>
			</div>
		);
	}
}

export default Slider;