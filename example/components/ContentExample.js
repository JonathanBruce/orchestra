/* eslint-disable no-console */
/* global console, React */

import {
	Container,
	Content,
	EarnedMediaStat,
	Four,
	LinksSubHeader,
	Icons,
	Influencer,
	Nine,
	SecondaryPositiveButton,
	Six,
	Stat,
	TitleSubHeader,
	Twelve
} from '../../src/ui';

class ContentExample extends React.Component {
	render() {
		return (
			<Container>
				<Twelve>
					<a id='content'/>
					<h2>Content and Stats</h2>
				</Twelve>

				<Twelve>
					<p>Content.jsx</p>
					<Content
						icon={ <Icons.Accounts /> }
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
					<p>Content.jsx</p>
					<Content
						height='100px'
						icon={ <Icons.Accounts /> }
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
					<p>LinksSubHeader.jsx</p>
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
					<p>TitleSubHeader.jsx</p>
					<TitleSubHeader title='Hello world' widgets={
						<SecondaryPositiveButton icon={ <Icons.Links /> }>
							Connect New
						</SecondaryPositiveButton>
					} />
				</Twelve>

				<Nine>
					<p>Influencer.jsx</p>
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
					<p>Stat.jsx</p>
					<Stat
						name='Total People Engaged'
						number={ '5,000,000' } />
				</Six>

				<Four>
					<p>EarnedMediaStat.jsx</p>
					<EarnedMediaStat
						icon={ <Icons.Impressions /> }
						amount={ '$10000.00' }
						title='Impressions'
						number={ 1000 } />
				</Four>
			</Container>
		);
	}
}

export default ContentExample;