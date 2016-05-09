/* global document, React, ReactDOM */

import '../src/sass/_example.scss';
import {
	Three,
	Twelve,
	Container,
	Alert,
	BrandButton,
	FemaleButton,
	Icons,
	MaleButton,
	PrimaryNegativeButton,
	PrimaryNeutralButton,
	PrimaryPositiveButton,
	SecondaryNeutralButton,
	SecondaryPositiveButton,
	TertiaryNegativeButton,
	TertiaryNeutralButton,
	TertiaryPositiveButton
} from '../src/ui';

class Example extends React.Component {
	render() {
		return (
			<div>
				<Container>
					<Twelve>
						<h1>Orchestra Example Page</h1>
					</Twelve>

					<Twelve>
						<Alert alert={ { kind: 'danger', message: 'There was an error in the campaign.  Please resolve any highlighted field and relaunch it.' } } />
					</Twelve>

					<Twelve>
						<Alert alert={ { kind: 'information', message: 'You are receiving some sort of informational message.' } } />
					</Twelve>

					<Twelve>
						<Alert alert={ { kind: 'success', message: 'You successfully launched the campaign!' } } />
					</Twelve>

					<Three>
						<BrandButton />
					</Three>

					<Three>
						<BrandButton active />
					</Three>

					<Three>
						<FemaleButton />
					</Three>

					<Three>
						<FemaleButton active />
					</Three>

					<Three>
						<MaleButton />
					</Three>

					<Three>
						<MaleButton active />
					</Three>

					<Three>
						<PrimaryNegativeButton>Primary Negative</PrimaryNegativeButton>
					</Three>

					<Three>
						<PrimaryNeutralButton>Primary Neutral</PrimaryNeutralButton>
					</Three>

					<Three>
						<PrimaryPositiveButton>Primary Positive</PrimaryPositiveButton>
					</Three>

					<Three>
						<PrimaryPositiveButton disabled>Primary Positive</PrimaryPositiveButton>
					</Three>

					<Three>
						<SecondaryNeutralButton icon={ <Icons.Links /> } >Secondary Neutral</SecondaryNeutralButton>
					</Three>

					<Three>
						<SecondaryPositiveButton icon={ <Icons.Links /> } >Secondary Positive</SecondaryPositiveButton>
					</Three>

					<Three>
						<TertiaryNegativeButton><Icons.GoBack /></TertiaryNegativeButton>
					</Three>

					<Three>
						<TertiaryNeutralButton><Icons.GoBack /></TertiaryNeutralButton>
					</Three>

					<Three>
						<TertiaryPositiveButton><Icons.GoBack /></TertiaryPositiveButton>
					</Three>

					<Three>
						<TertiaryPositiveButton disabled><Icons.GoBack /></TertiaryPositiveButton>
					</Three>
				</Container>
			</div>
		);
	}
}

ReactDOM.render(<Example />, document.getElementById('example'));