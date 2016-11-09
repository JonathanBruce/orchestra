/* eslint-disable no-console */
/* global console, document, React, ReactDOM */

import '../src/sass/_example.scss';
import {
	Alert,
	APP,
	Avatar,
	BrandButton,
	CheckBox,
	DropDown,
	Container,
	Content,
	FemaleButton,
	Four,
	FullPrimaryButton,
	FullSecondaryButton,
	FullTertiaryButton,
	Icons,
	Input,
	LinksSubHeader,
	MaleButton,
	MarketingFullPrimaryButton,
	MarketingFullSecondaryButton,
	MarketingPartialPrimaryButton,
	PaginationApprove,
	PaginationControls,
	PartialPrimaryButton,
	PartialSecondaryButton,
	PartialTertiaryButton,
	PillToggle,
	PrimaryNegativeButton,
	PrimaryNeutralButton,
	PrimaryPositiveButton,
	SecondaryNeutralButton,
	SecondaryPositiveButton,
	Six,
	Slider,
	Stat,
	Switch,
	TertiaryNegativeButton,
	TertiaryNeutralButton,
	TertiaryPositiveButton,
	Three,
	TitleSubHeader,
	Twelve,
	Two
} from '../src/ui';

class Example extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sliderValue: 0
		};
	}

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
						<LinksSubHeader
							onClick={
								(value) => {
									console.log(value);
								}
							} widgets={
								[
									<SecondaryPositiveButton
										icon={ <Icons.Links /> }
										key={ 1 }>
										First Widget
									</SecondaryPositiveButton>,
									<SecondaryPositiveButton
										icon={ <Icons.Links /> }
										key={ 2 }>
										Second Widget
									</SecondaryPositiveButton>
								]
							}>
							<a href='#' className='active'>Hello</a>
							<a href='#'>World</a>
						</LinksSubHeader>
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
						<FullPrimaryButton>Full Primary</FullPrimaryButton>
					</Three>

					<Three>
						<FullSecondaryButton>Full Secondary</FullSecondaryButton>
					</Three>

					<Three>
						<FullTertiaryButton>Full Tertiary</FullTertiaryButton>
					</Three>

					<Three>
						<PartialPrimaryButton><Icons.Links /></PartialPrimaryButton>
					</Three>

					<Three>
						<PartialSecondaryButton><Icons.Links /></PartialSecondaryButton>
					</Three>

					<Three>
						<PartialTertiaryButton><Icons.Links /></PartialTertiaryButton>
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

					<Four>
						<MarketingFullPrimaryButton>Marketing Primary</MarketingFullPrimaryButton>
					</Four>

					<Four>
						<MarketingFullSecondaryButton>Marketing Secondary</MarketingFullSecondaryButton>
					</Four>

					<Two>
						<MarketingPartialPrimaryButton>MKT Part.</MarketingPartialPrimaryButton>
					</Two>

					<Three>
						<DropDown
							label='DropDown'
							onChange={
								(value) => {
									console.log(value);
								}
							}
							onToggle={
								() => {
									console.log('toggled');
								}
							}
							options={
								[
									{ label: 'one', value: 1 },
									{ label: 'two', value: 2 },
									{ label: 'three', value: 3 }
								]
							}
							selected={ 1 } />
					</Three>

					<Three>
						<DropDown
							active
							onChange={
								(value) => {
									console.log(value);
								}
							}
							onToggle={
								() => {
									console.log('toggled');
								}
							}
							options={
								[
									{ label: 'one', value: 1 },
									{ label: 'two', value: 2 },
									{ label: 'three', value: 3 }
								]
							}
							selected={ 1 } />
					</Three>

					<Three>
						<DropDown
							active
							onChange={
								(value) => {
									console.log(value);
								}
							}
							onToggle={
								() => {
									console.log('toggled');
								}
							}
							options={
								[
									{ label: 'one extremely long label that should be cut off if it knows what is good for it', value: 1 },
									{ label: 'two', value: 2 },
									{ label: 'three', value: 3 },
									{ label: 'four', value: 4 }
								]
							}
							selected={ 1 } />
					</Three>

					<Three>
						<DropDown
							disabled
							label='Disabled DropDown'
							onChange={
								(value) => {
									console.log(value);
								}
							}
							onToggle={
								() => {
									console.log('toggled');
								}
							}
							options={
								[
									{ label: 'one', value: 1 },
									{ label: 'two', value: 2 },
									{ label: 'three', value: 3 }
								]
							} />
					</Three>

					<Three>
						<Input icon={ <Icons.SmallUser /> }
							placeholder='Username'
							type='text' />
					</Three>

					<Three>
						<Input
							defaultValue='Error Text'
							error={ true }
							icon={ <Icons.SmallUser /> }
							placeholder='Username'
							type='text' />
					</Three>

					<Three>
						<Input
							defaultValue='Disabled text'
							disabled={ true }
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

					<Three>
						<PaginationControls
							onDecreaseClick={
								() => {
									console.log('decreasing');
								}
							}
							onIncreaseClick={
								() => {
									console.log('increasing');
								}
							}
							decreaseDisabled={ 1 === 2 }
							increaseDisabled={ true } />

						<PaginationControls
							onDecreaseClick={
								() => {
									console.log('decreasing');
								}
							}
							onIncreaseClick={
								() => {
									console.log('increasing');
								}
							}
							decreaseDisabled={ false }
							increaseDisabled={ false } />
					</Three>

					<Three>
						<PaginationApprove
							approveDisabled={ false }
							currentPage={ 1 }
							onApproveClick={
								() => {
									console.log('approving');
								}
							}
							onDecreaseClick={
								() => {
									console.log('decreasing');
								}
							}
							onIncreaseClick={
								() => {
									console.log('increasing');
								}
							}
							totalPages={ 5 } />

						<PaginationApprove
							approveDisabled={ false }
							currentPage={ 5 }
							onApproveClick={
								() => {
									console.log('approving');
								}
							}
							onDecreaseClick={
								() => {
									console.log('decreasing');
								}
							}
							onIncreaseClick={
								() => {
									console.log('increasing');
								}
							}
							totalPages={ 5 } />

						<PaginationApprove
							approveDisabled={ false }
							currentPage={ 0 }
							onApproveClick={
								() => {
									console.log('approving');
								}
							}
							onDecreaseClick={
								() => {
									console.log('decreasing');
								}
							}
							onIncreaseClick={
								() => {
									console.log('increasing');
								}
							}
							totalPages={ 5 } />
					</Three>

					<Three>
						<Avatar />
						<Avatar
							image='https://pbs.twimg.com/profile_images/489091337690419200/L_r1zbKT_400x400.png'
							size={ 68 } />
					</Three>

					<Three>
						<Switch
							onClick={
								(value) => {
									console.log(value);
								}
							} />

						<Switch
							active
							onClick={
								(value) => {
									console.log(value);
								}
							} />
					</Three>

					<Three>
						<Slider
							defaultValue={ 40 }
							disabled
							label='foo'
							max={ 365 }
							min={ 0 } />
						<Slider
							defaultValue={ this.state.sliderValue }
							interval={ 5 }
							label='bar'
							max={ 20 }
							min={ 0 }
							onDragChange={
								(sliderValue) => {
									this.setState({ sliderValue });
								}
							}
							onDragEnd={
								(value) => {
									console.log('on drag end', value);
								}
							}
							onDragStart={
								(sliderValue) => {
									this.setState({ sliderValue });
								}
							} />
					</Three>

					<Six>
						<Stat
							name='Total People Engaged'
							number={ '5,000,000' } />
					</Six>
				</Container>
			</div>
		);
	}
}

ReactDOM.render(<Example />, document.getElementById('example'));