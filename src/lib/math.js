/**
 * Get ratio of the numerator and denominator.
 * @param  {number} numerator   Numerator
 * @param  {number} denominator Denominator
 * @param  {number} value       Value to be multiplied by the ratio
 * @param  {number} intercept   Number representing the lowest number numerator can go
 * @return {number}             Proportionally represented value
 */
export function getRatioValue({ numerator, denominator, value, intercept = 0 }) {
	if (!denominator || !numerator) {
		return 0;
	}
	else if (numerator < intercept) {
		return intercept;
	}

	const ratio = numerator / denominator;

	if (ratio > 1) {
		return value;
	}

	return Math.round(ratio * value);
}

/**
 * Get the next value based on the value given and the interval the value should go by
 * @param  {number} value    Value to determine the next interval value
 * @param  {number} interval Interval value to incremement  fro
 * @return {number}          Next vlue reflecting on the interval given
 */
export function getIntervalValue(value, interval) {
	const remainder = value % interval;

	return remainder === 0
		? value
		: (value - remainder) + (interval * Math.round(remainder / interval));
}