/**
 * Shorten the number to max 4 chars
 * @param   {number} num       Arbitrary number
 * @param   {number} precision Number of significant figures, defaults to 3
 * @param   {number} [fixed]   Number of fixed decimal digits, overrides precision. optional.
 * @returns {string}            Shortened number if needed
 */
export function shortenNumber(num, precision = 3, fixed) {
	const suffix = [ 'K', 'M' ];
	const divisor = 1000;

	if (isNaN(num)) {
		return;
	}

	if (num < 1000) {
		return String(num);
	}

	let remainder = num;

	for (let i = 0; i < suffix.length; i++) {
		remainder /= divisor;

		if (remainder < divisor && remainder >= 1) {
			if (!isNaN(fixed)) {
				const fixedRemainder = remainder.toFixed(fixed);

				return `${fixedRemainder}${suffix[ i ]}`;
			}

			const numberLength = String(remainder).length;
			const truncatedPrecision = numberLength < precision ? numberLength : precision;
			const preciseRemainder = remainder.toPrecision(truncatedPrecision);

			return `${preciseRemainder}${suffix[ i ]}`;
		}
	}

	return String(num);
}

/**
 * Capitalize first letter in the phrase given
 * @param   {string} str String value to capitalize
 * @returns {string}     Capitalized string
 */
export function toUpperCaseFirstCharacter(str) {
	return str[ 0 ].toUpperCase() + str.substring(1, str.length);
}

/**
 * the reverse of the shorten number function
 * @param  {number || string} number number to be parsed and made into long form
 * @return {number}                  long form number
 */
export function unshortenNumber(number) {
	const string = String(number);
	const suffix = string.substring(string.length - 1);

	if (!isNaN(suffix) && suffix !== 'M' && suffix !== 'K') {
		return number;
	}

	const numeric = string.substring(0, string.length - 1);
	const multiplier = suffix === 'M' ? 1000000 : 1000;

	return Math.round(Number(numeric) * multiplier);
}