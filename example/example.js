/* eslint-disable no-console */
/* global console, document, React, ReactDOM */

import '../src/sass/_example.scss';
import Alerts from './components/Alerts.js';
import ButtonList from './components/ButtonList.js';
import ContentExample from './components/ContentExample.js';
import Forms from './components/Forms.js';
import Misc from './components/Misc.js';
import PersonComponents from './components/Person.js';
import {
	Container,
	FloatingSubHeader,
	Twelve
} from '../src/ui';
import SVGs from './components/SVGs.js';
import ToggleList from './components/ToggleList.js';

class Example extends React.Component {
	render() {
		return (
			<div>
				<FloatingSubHeader
					fixed={ false }
					onFloat={
						(floatInd) => {
							console.log(floatInd);
						}
					}>
					<div>FloatingSubheader.jsx</div>
					<a href='#top'>Back to Top</a>
				</FloatingSubHeader>

				<Container className='example-container'>
					<Twelve className='title'>
						<a id='top'/>
						<h1>Orchestra Example Page</h1>
					</Twelve>

					<Twelve>
						<table>
							<thead>
								<tr>
									<th/>
									<th>Navigation</th>
									<th/>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><a href='#alerts'>Alerts</a></td>
									<td><a href='#buttons'>Buttons</a></td>
									<td><a href='#toggles'>Toggles, Sliders, and Pagination</a></td>
								</tr>
								<tr>
									<td><a href='#content'>Content and Stats</a></td>
									<td><a href='#dropdowns'>Forms</a></td>
									<td><a href='#misc'>Miscellaneous</a></td>
								</tr>
								<tr>
									<td/>
									<td><a href='#svgs'>SVGs</a></td>
									<td/>
								</tr>
							</tbody>
						</table>
					</Twelve>

					<Alerts />

					<ContentExample />

					<ButtonList />

					<Forms />

					<ToggleList />

					<Misc />

					<SVGs />

					<PersonComponents/>
				</Container>
			</div>
		);
	}
}

ReactDOM.render(<Example />, document.getElementById('example'));