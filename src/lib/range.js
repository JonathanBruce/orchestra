/* eslint-disable no-console */
/* global console */

export function onEnd(value, element) {
	console.log('on range drag end', value);
	const hasMultiplier = value / 1000 >= 1;
	const isMillion = value / 1000 >= 1000;
	let suffix = '';
	let displayValue = value;

	if (hasMultiplier) {
		suffix = isMillion ? 'M' : 'K';
		displayValue = isMillion ? value / 1000000 : value / 1000;
	}

	this.setState({
		[ `${ element }Display` ]: `${ parseInt(displayValue, 10) }${ suffix }`,
		[ element ]: value
	});
}

export function onChange(rangeValue, element) {
	this.setState({
		[ `${ element }Display` ]: rangeValue,
		[ element ]: rangeValue
	});
}

export function onStart(value, element) {
	this.setState({ [ `${ element }Display` ]: value });
}