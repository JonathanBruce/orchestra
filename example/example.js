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
	FilterBox,
	Four,
	FullPrimaryButton,
	FullSecondaryButton,
	FullTertiaryButton,
	Icons,
	Influencer,
	Input,
	KeywordTag,
	LinksSubHeader,
	MaleButton,
	MarketingFullPrimaryButton,
	MarketingFullSecondaryButton,
	MarketingPartialPrimaryButton,
	Nine,
	Notifier,
	PaginationApprove,
	PaginationControls,
	PartialPrimaryButton,
	PartialSecondaryButton,
	PartialTertiaryButton,
	PillToggle,
	PrimaryNegativeButton,
	PrimaryNeutralButton,
	PrimaryPositiveButton,
	PulseLoader,
	RESOURCE_ACTION_DROPDOWN,
	ResourceActionDropDown,
	ResourceActionMenu,
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
	Two,
	ValueActionDropDown
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

					<Three>
						<PulseLoader size={ 100 } />
					</Three>

					<Nine>
						<Influencer
							biography='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
							followers='20K'
							image='https://pbs.twimg.com/profile_images/489091337690419200/L_r1zbKT_400x400.png'
							name='Jack McGlinchey'
							location='Atlanta, GA'
							profiles={
								[
									{ type: 'facebook', pos: 6 },
									{ type: 'instagram', pos: 4 },
									{ type: 'reddit', pos: 3 },
									{ type: 'skype', pos: 2 },
									{ type: 'stackexchange', pos: 1 },
									{ type: 'twitter', pos: 5 },
									{ type: 'yelp', pos: 0 },
									{ type: 'xing', pos: 0 },
									{ type: 'youtube', pos: 0 }
								]
							}
							relevance={ 8 }
							resonance={ 10 }
							topics={
								[ 'football', 'braves', 'baseball and something long', 'insightpool' ]
							}
							topicPrefix='#'
							twitterHandle='something' />
					</Nine>

					<Six>
						<Stat
							name='Total People Engaged'
							number={ '5,000,000' } />
					</Six>

					<Three>
						<KeywordTag
							network='facebook'
							onNetworkChange={
								(network) => {
									console.log(network);
								}
							}
							onNetworkToggle={
								() => {
									console.log('toggled network');
								}
							}
							onTagChange={
								(tag) => {
									console.log(tag);
								}
							}
							defaultValue='Some value' />

						<KeywordTag
							network='instagram'
							onNetworkChange={
								(network) => {
									console.log(network);
								}
							}
							onNetworkToggle={
								() => {
									console.log('toggled network');
								}
							}
							onTagChange={
								(tag) => {
									console.log(tag);
								}
							}
							defaultValue='Some value' />

						<KeywordTag
							network='linkedin'
							onNetworkChange={
								(network) => {
									console.log(network);
								}
							}
							onNetworkToggle={
								() => {
									console.log('toggled network');
								}
							}
							onTagChange={
								(tag) => {
									console.log(tag);
								}
							}
							defaultValue='Some value' />

						<KeywordTag
							network='youtube'
							onNetworkChange={
								(network) => {
									console.log(network);
								}
							}
							onNetworkToggle={
								() => {
									console.log('toggled network');
								}
							}
							onTagChange={
								(tag) => {
									console.log(tag);
								}
							}
							defaultValue='Some value' />

						<KeywordTag
							requirement='exclude'
							onRequirementChange={
								(requirement) => {
									console.log(requirement);
								}
							}
							onRequirementToggle={
								() => {
									console.log('toggled requirement');
								}
							}
							onTagChange={
								(tag) => {
									console.log(tag);
								}
							}
							defaultValue='Some value' />

						<KeywordTag
							requirement='locked'
							onRequirementChange={
								(requirement) => {
									console.log(requirement);
								}
							}
							onRequirementToggle={
								() => {
									console.log('toggled requirement');
								}
							}
							onTagChange={
								(tag) => {
									console.log(tag);
								}
							}
							defaultValue='Some value' />

						<KeywordTag
							requirement='neutral'
							onRequirementChange={
								(requirement) => {
									console.log(requirement);
								}
							}
							onRequirementToggle={
								() => {
									console.log('toggled requirement');
								}
							}
							onTagChange={
								(tag) => {
									console.log(tag);
								}
							}
							defaultValue='Some value' />

						<KeywordTag
							requirement='stream'
							onTagChange={
								(tag) => {
									console.log(tag);
								}
							}
							defaultValue='Some value' />

						<KeywordTag
							requirement='stream'
							onTagChange={
								(tag) => {
									console.log(tag);
								}
							}
							defaultValue='Some value' />

						<KeywordTag
							network='youtube'
							onNetworkChange={
								(network) => {
									console.log(network);
								}
							}
							onNetworkToggle={
								() => {
									console.log('toggled network');
								}
							}
							requirement='neutral'
							onRequirementChange={
								(requirement) => {
									console.log(requirement);
								}
							}
							onRequirementToggle={
								() => {
									console.log('toggled requirement');
								}
							}
							onTagChange={
								(tag) => {
									console.log(tag);
								}
							}
							defaultValue='Some value' />

						<KeywordTag
							edit={ true }
							network='youtube'
							onNetworkChange={
								(network) => {
									console.log(network);
								}
							}
							onNetworkToggle={
								() => {
									console.log('toggled network');
								}
							}
							requirement='neutral'
							onRequirementChange={
								(requirement) => {
									console.log(requirement);
								}
							}
							onRequirementToggle={
								() => {
									console.log('toggled requirement');
								}
							}
							onTagChange={
								(tag) => {
									console.log(tag);
								}
							}
							defaultValue='Some value' />

						<KeywordTag
							network='youtube'
							openRequirement={ true }
							onNetworkChange={
								(network) => {
									console.log(network);
								}
							}
							onNetworkToggle={
								() => {
									console.log('toggled network');
								}
							}
							requirement='neutral'
							onRequirementChange={
								(requirement) => {
									console.log(requirement);
								}
							}
							onRequirementToggle={
								() => {
									console.log('toggled requirement');
								}
							}
							onTagChange={
								(tag) => {
									console.log(tag);
								}
							}
							defaultValue='Some value' />
					</Three>

					<Three>
						<FilterBox
							onWidgetToggle={
								() => {
									console.log('toggled widget');
								}
							}
							title={ 'Influencers Of' }
							tooltipTitle={ 'Info Title' }
							tooltipValue={ 'This is Information' }
							widget={ <div>Widget Content</div> }
							widgetIcon={ <Icons.Search /> }
							widgetOpen={ false }>
							<div>Content 1</div>
							<div>Content 2</div>
						</FilterBox>

						<FilterBox
							onWidgetToggle={
								() => {
									console.log('toggled widget');
								}
							}
							title={ 'Bio Topic' }
							titleIcon={ <Icons.Instagram /> }
							tooltipTitle={ 'Info Title' }
							tooltipValue={ 'This is Information' }
							widget={ <div>Widget Content</div> }
							widgetIcon={ <Icons.Search /> }
							widgetOpen={ true }>
							<div>Content 1</div>
							<div>Content 2</div>
						</FilterBox>
					</Three>

					<Three>
						<Notifier
							icon={ <Icons.AdvancedSearch /> }
							onClick={ () => {
								console.log('notifier clicked');
							} }
							value={ 3 } />

						<Notifier
							active
							disabled
							icon={ <Icons.AdvancedSearch /> }
							value={ 3 } />
					</Three>

					<Three>
						<ResourceActionDropDown state={ RESOURCE_ACTION_DROPDOWN.SAVED } />
					</Three>

					<Three>
						<ValueActionDropDown
							title='Add To Segment'
							value='0' />
					</Three>

					<Six>
						<ResourceActionMenu
							placeholder='UPS Followers 10-22'
							title='Name Your Search:' />
					</Six>
				</Container>
			</div>
		);
	}
}

ReactDOM.render(<Example />, document.getElementById('example'));