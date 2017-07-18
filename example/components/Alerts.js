/* eslint-disable no-console */
/* global React */

import {
	Alert,
	Container,
	Twelve
} from '../../src/ui';

class Alerts extends React.Component {
	render() {
		return (
			<Container>
				<Twelve>
					<a id='alerts'/>
					<h2>Alerts</h2>
				</Twelve>

				<Twelve>
					<p>Alert.jsx danger</p>
					<Alert alert={ { kind: 'danger', message: 'There was an error in the campaign.  Please resolve any highlighted field and relaunch it.' } } />
				</Twelve>

				<Twelve>
					<p>Alert.jsx information</p>
					<Alert alert={ { kind: 'information', message: 'You are receiving some sort of informational message.' } } />
				</Twelve>

				<Twelve>
					<p>Alert.jsx success</p>
					<Alert alert={ { kind: 'success', message: 'You successfully launched the campaign!' } } />
				</Twelve>
			</Container>
		);
	}
}

export default Alerts;