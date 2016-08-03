/* global document, React, ReactDOM */

import '../src/sass/_example.scss';
import {
	Alert,
	APP,
	BrandButton,
	CheckBox,
	Container,
	Content,
	FemaleButton,
	Icons,
	Input,
	LinksSubHeader,
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
	TitleSubHeader,
	Twelve
} from '../src/ui';

class Example extends React.Component {
	render() {
		return (
			<div>
				<Container className='example-container'>
					<Twelve className='title'>
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

					<Twelve>
						<Content icon={ <Icons.Accounts /> }
							onScrollBottom={
								() => {
									console.log('hit the bottom');
								}
							}
							title='Twitter Accounts'
							widget={
								<SecondaryPositiveButton icon={ <Icons.Links /> } >
									Connect New
								</SecondaryPositiveButton>
							}>
							List of accounts
						</Content>
					</Twelve>

					<Twelve>
						<LinksSubHeader links={
							[
								{
									active: true,
									label: 'Hello',
									value: 'hello'
								},
								{
									active: false,
									label: 'World',
									value: 'world'
								}
							]
						} onClick={
							(value) => {
								console.log(value);
							}
						} widgets={
							[
								<SecondaryPositiveButton icon={ <Icons.Links /> }>
									First Widget
								</SecondaryPositiveButton>,
								<SecondaryPositiveButton icon={ <Icons.Links /> }>
									Second Widget
								</SecondaryPositiveButton>
							]
						}/>
					</Twelve>

					<Twelve>
						<TitleSubHeader title='Hello world' widgets={
							<SecondaryPositiveButton icon={ <Icons.Links /> }>
								Connect New
							</SecondaryPositiveButton>
						} />
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
									label: 'A',
									value: 'a'
								},
								{
									active: false,
									label: 'B',
									notifications: [ 12, APP.ERROR ],
									value: 'b'
								},
								{
									active: false,
									label: 'C',
									notifications: [ 12, APP.INFORMATION ],
									value: 'c'
								},
								{
									active: false,
									label: 'D',
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
						<CheckBox onClick={
							(value) => {
								console.log(value);
							}
						} label='Option A' />

						<CheckBox checked onClick={
							(value) => {
								console.log(value);
							}
						} label='Option B' />

						<CheckBox disabled onClick={
							(value) => {
								console.log(value);
							}
						} label='Option C' />

						<CheckBox checked disabled onClick={
							(value) => {
								console.log(value);
							}
						} label='Option D' />
					</Three>
				</Container>
			</div>
		);
	}
}

ReactDOM.render(<Example />, document.getElementById('example'));