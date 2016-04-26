/* global React */

class Component extends React.Component {
	/**
	 * Merges class names
	 * @param  {string} className    Original class name
	 * @param  {string} propsClasses Classnames passed down
	 * @return {string}              Merged class name
	 */
	mergeClasses(className, propsClasses) {
		if (propsClasses) {
			return `${className} ${propsClasses}`;
		}

		return `${className}`;
	}
}

export default Component;