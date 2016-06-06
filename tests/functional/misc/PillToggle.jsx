/* eslint-disable */
/* global document, React, ReactDOM, window */

import 'sass/ui.scss';
import PillToggle from 'components/misc/PillToggle.jsx';
import Icons from 'icons/_all.js';

class PillToggleTest extends React.Component {
	constructor() {
		super();

		this.state = {
			items: {
				A: { active: true },
				B: { active: false },
				C: { active: false },
				D: { active: false }
			}
		}
	}

	onItemClick = (val) => {
		const { value } = this.refs;

		value.textContent = val;
	};

	render() {
		return (
			<div id='pill-toggle'>
				<span ref='value' className='value'></span>
				<PillToggle items={ this.state.items } onClick={ this.onItemClick } />
			</div>
		);
	}
}

ReactDOM.render(<PillToggleTest />, document.getElementById('test'));