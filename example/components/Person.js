/* eslint-disable no-console */
/* global console, React */

import {
	Container,
	SocialProfiles,
	Three,
	Twelve
} from '../../src/ui';

class ToggleList extends React.Component {
	render() {
		const profiles = {
			bebo: {
				pos: 0,
				url: 'http://bebo.com/jennettemccurdy',
				username: 'jennettemccurdy'
			},
			twitter: {
				pos: 0,
				url: 'http://bebo.com/jennettemccurdy',
				username: 'jennettemccurdy'
			},
			pinterest: {
				pos: 0,
				url: 'http://bebo.com/jennettemccurdy',
				username: 'jennettemccurdy'
			},
			instagram: {
				pos: 0,
				url: 'http://bebo.com/jennettemccurdy',
				username: 'jennettemccurdy'
			},
			facebook: {
				pos: 0,
				url: 'http://bebo.com/jennettemccurdy',
				username: 'jennettemccurdy'
			},
			snapchat: {
				pos: 0,
				url: 'http://bebo.com/jennettemccurdy',
				username: 'jennettemccurdy'
			},
			myspace: {
				pos: 0,
				url: 'http://bebo.com/jennettemccurdy',
				username: 'jennettemccurdy'
			}
		};

		return (
			<Container>
				<Twelve>
					<a id='Person tile'/>
					<h2>Person tile component aspects</h2>
				</Twelve>

				<Three>
					<p>SocialProfiles.jsx</p>
					<SocialProfiles
						profiles={ profiles }
						showCount={ 6 } />
				</Three>
			</Container>
		);
	}
}

export default ToggleList;
