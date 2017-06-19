/* eslint-disable no-console */
/* global React */

import {
	Container,
	Icons,
	Three,
	Twelve
} from '../../src/ui';

class SVGs extends React.Component {
	populateSVGs() {
		return Object.keys(Icons).map((name, index) => {
			const Icon = Icons[ name ];

			return (
				<Three key={ index }>
					<p>{ name + '.svg '}</p>
					<Icon height='24px' width='24px' />
				</Three>
			);
		});
	}

	render() {
		return (
			<Container>
				<Twelve>
					<a id='svgs'/>
					<h2>SVGs/icons</h2>
				</Twelve>
				{ this.populateSVGs() }
			</Container>
		);
	}
}

export default SVGs;