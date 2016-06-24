/* global document, React, ReactDOM */

import '../src/sass/_example.scss';
import {
	Alert,
	APP,
	BrandButton,
	CheckBox,
	Container,
	FemaleButton,
	Icons,
	Input,
	MaleButton,
	PillToggle,
	PrimaryNegativeButton,
	PrimaryNeutralButton,
	PrimaryPositiveButton,
	SecondaryNeutralButton,
	SecondaryPositiveButton,
	TertiaryNegativeButton,
	TertiaryNeutralButton,
	TertiaryPositiveButton,
	Three,
	Twelve
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

					<Three>
						<Input icon={ <Icons.SmallUser /> }
							placeholder='Username'
							type='text' />
					</Three>

					<Three>
						<Input error={ true }
							icon={ <Icons.SmallUser /> }
							placeholder='Username'
							type='text' />
					</Three>

					<Three>
						<Input disabled={ true }
							icon={ <Icons.SmallUser /> }
							placeholder='Username'
							type='text' />
					</Three>

					<Three>
						<PillToggle items={
							[
								{
									active: true,
									name: 'A',
									value: 'a'
								},
								{
									active: false,
									name: 'B',
									notifications: [ 12, APP.ERROR ],
									value: 'b'
								},
								{
									active: false,
									name: 'C',
									notifications: [ 12, APP.INFORMATION ],
									value: 'c'
								},
								{
									active: false,
									name: 'D',
									value: 'd'
								}
							]
						} onClick={
							(value) => {
								console.log(value);
							}
						} />
					</Three>

					<Three>
						<CheckBox callback={
							(value) => {
								console.log(value);
							}
						} />

						<CheckBox checked callback= {
							(value) => {
								console.log(value);
							}
						} />

						<CheckBox disabled callback= {
							(value) => {
								console.log(value);
							}
						} />

						<CheckBox checked disabled callback= {
							(value) => {
								console.log(value);
							}
						} />
					</Three>
				</Container>
			</div>
		);
	}
}

ReactDOM.render(<Example />, document.getElementById('example'));