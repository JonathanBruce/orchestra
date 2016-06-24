/* eslint-disable */
/* global document, React, ReactDOM, window */

import 'sass/ui.scss';
import APP from 'constants/APP';
import PillToggle from 'components/misc/PillToggle.jsx';
import Icons from 'icons/_all';

class PillToggleTest extends React.Component {
	constructor() {
		super();

		this.state = {
			items: [
				{
					active: true,
					name: 'A',
					value: 'a'
				},
				{
					active: false,
					name: 'B',
					notifications: [ 1, APP.ERROR ],
					value: 'b'
				},
				{
					active: false,
					name: 'C',
					value: 'c'
				},
				{
					active: false,
					name: 'D',
					notifications: [ 12, APP.INFORMATION ],
					value: 'd'
				}
			]
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