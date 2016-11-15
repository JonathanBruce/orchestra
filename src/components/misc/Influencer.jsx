/* global React */

import Avatar from './Avatar.jsx';
import { NETWORKS } from 'constants/NETWORKS';
import Icons from 'icons/_all';

class Influencer extends React.Component {
	static propTypes = {
		biography: React.PropTypes.string,
		followers: React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.string
		]),
		image: React.PropTypes.string.isRequired,
		name: React.PropTypes.string.isRequired,
		relevance: React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.string
		]),
		resonance: React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.string
		]),
		topics: React.PropTypes.arrayOf(React.PropTypes.string),
		topicPrefix: React.PropTypes.string
	};

	renderKloutTopics = (topics) => {
		const { topicPrefix = '' } = this.props;


		return topics.map((topic, index) => {
			const value = `${topicPrefix}${topic}`;

			return (
				<div className='topic'
					key={ index }>
					{ value.length > 16 ? value.slice(0, 16) + '...' : value }
				</div>
			);
		});
	};

	renderSocialProfiles = () => {
		const { profiles, twitterHandle } = this.props;
		const icons = [];
		let count = 0;

		for (const profile of profiles) {
			const { type, url } = profile;

			if (count < 6) {
				switch (type) {
					case NETWORKS.ABOUTME:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Aboutme />
							</a>
						));
						break;
					case NETWORKS.ACADEMIA_EDU:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Academiaedu />
							</a>
						));
						break;
					case NETWORKS.ANGELLIST:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Angellist />
							</a>
						));
						break;
					case NETWORKS.BANDCAMP:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Bandcamp />
							</a>
						));
						break;
					case NETWORKS.BEBO:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Bebo />
							</a>
						));
						break;
					case NETWORKS.BEHANCE:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Behance />
							</a>
						));
						break;
					case NETWORKS.BITBUCKET:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Bitbucket />
							</a>
						));
						break;
					case NETWORKS.BLIP_FM:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Blipfm />
							</a>
						));
						break;
					case NETWORKS.BLOGGER:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Blogger />
							</a>
						));
						break;
					case NETWORKS.CRUNCHBASE:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Crunchbase />
							</a>
						));
						break;
					case NETWORKS.DANDY_ID:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Dandyid />
							</a>
						));
						break;
					case NETWORKS.DELICIOUS:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Delicious />
							</a>
						));
						break;
					case NETWORKS.DEVIANT_ART:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Deviantart />
							</a>
						));
						break;
					case NETWORKS.DIIGO:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Diigo />
							</a>
						));
						break;
					case NETWORKS.DIGG:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Digg />
							</a>
						));
						break;
					case NETWORKS.DISQUS:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Disqus />
							</a>
						));
						break;
					case NETWORKS.DO_YOU_BUZZ:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Doyoubuzz />
							</a>
						));
						break;
					case NETWORKS.DRIBBBLE:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Dribbble />
							</a>
						));
						break;
					case NETWORKS.ECONSULTANCY:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Econsultancy />
							</a>
						));
						break;
					case NETWORKS.FACEBOOK:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Facebook />
							</a>
						));
						break;
					case NETWORKS.FLICKR:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Flickr />
							</a>
						));
						break;
					case NETWORKS.FOURSQUARE:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Foursquare />
							</a>
						));
						break;
					case NETWORKS.GDGT:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Gdgt />
							</a>
						));
						break;
					case NETWORKS.GITHUB:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Github />
							</a>
						));
						break;
					case NETWORKS.GOOD_READS:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Goodreads />
							</a>
						));
						break;
					case NETWORKS.GOOGLE:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Google />
							</a>
						));
						break;
					case NETWORKS.GRAVATAR:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Gravatar />
							</a>
						));
						break;
					case NETWORKS.HACKER_NEWS:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Hackernews />
							</a>
						));
						break;
					case NETWORKS.HI5:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Hi5 />
							</a>
						));
						break;
					case NETWORKS.HYPE_MACHINE:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Hypemachine />
							</a>
							));
						break;
					case NETWORKS.ICQ:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Icqchat />
							</a>
						));
						break;
					case NETWORKS.IDENTICA:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Identica />
							</a>
						));
						break;
					case NETWORKS.IMDB:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Imdb />
							</a>
						));
						break;
					case NETWORKS.INSTAGRAM:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Instagram />
							</a>
						));
						break;
					case NETWORKS.KLOUT:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Klout />
							</a>
						));
						break;
					case NETWORKS.LANYRD:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Lanyrd />
							</a>
						));
						break;
					case NETWORKS.LAST_FM:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Lastfm />
							</a>
						));
						break;
					case NETWORKS.LINKEDIN:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Linkedin />
							</a>
						));
						break;
					case NETWORKS.LIVE_JOURNAL:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Livejournal />
							</a>
						));
						break;
					case NETWORKS.MEADICIONA:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Meadiciona />
							</a>
						));
						break;
					case NETWORKS.MIXCLOUD:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Mixcloud />
							</a>
						));
						break;
					case NETWORKS.MEETUP:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Meetup />
							</a>
						));
						break;
					case NETWORKS.MIXI:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Mixi />
							</a>
						));
						break;
					case NETWORKS.MYSPACE:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Myspace />
							</a>
						));
						break;
					case NETWORKS.OHLOH:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Ohloh />
							</a>
						));
						break;
					case NETWORKS.PANDORA:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Pandora />
							</a>
						));
						break;
					case NETWORKS.PIN_BOARD:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Pinboard />
							</a>
						));
						break;
					case NETWORKS.PINTEREST:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Pinterest />
							</a>
						));
						break;
					case NETWORKS.PLAXO:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Plaxo />
							</a>
						));
						break;
					case NETWORKS.PLURK:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Plurk />
							</a>
						));
						break;
					case NETWORKS.QUORA:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Quora />
							</a>
						));
						break;
					case NETWORKS.REDDIT:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Reddit />
							</a>
						));
						break;
					case NETWORKS.REN:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Ren />
							</a>
						));
						break;
					case NETWORKS.REVERB_NATION:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Reverbnation />
							</a>
						));
						break;
					case NETWORKS.SCRIBD:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Scribd />
							</a>
						));
						break;
					case NETWORKS.SHELFARI:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Shellfari />
							</a>
						));
						break;
					case NETWORKS.SKYPE:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Skype />
							</a>
						));
						break;
					case NETWORKS.SLIDESHARE:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Slideshare />
							</a>
						));
						break;
					case NETWORKS.SMUG_MUG:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Smugmug />
							</a>
						));
						break;
					case NETWORKS.SOUNDCLOUD:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Soundcloud />
							</a>
						));
						break;
					case NETWORKS.STACK_EXCHANGE:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Stackexchange />
							</a>
						));
						break;
					case NETWORKS.STACK_OVERFLOW:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Stackoverflow />
							</a>
						));
						break;
					case NETWORKS.STEAM:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Steam />
							</a>
						));
						break;
					case NETWORKS.STUMBLE_UPON:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Stumbleupon />
							</a>
						));
						break;
					case NETWORKS.TAGGED:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Tagged />
							</a>
						));
						break;
					case NETWORKS.TRIPIT:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Tripit />
							</a>
						));
						break;
					case NETWORKS.TUMBLR:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Tumblr />
							</a>
						));
						break;
					case NETWORKS.TWITTER:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Twitter />
							</a>
						));
						break;
					case NETWORKS.TYPE_PAD:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Typepad />
							</a>
						));
						break;
					case NETWORKS.VK:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Vk />
							</a>
						));
						break;
					case NETWORKS.WEIBO:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Weibo />
							</a>
						));
						break;
					case NETWORKS.WORDPRESS:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Wordpress />
							</a>
						));
						break;
					case NETWORKS.VIMEO:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Vimeo />
							</a>
						));
						break;
					case NETWORKS.YELP:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Yelp />
							</a>
						));
						break;
					case NETWORKS.XING:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Xing />
							</a>
						));
						break;
					case NETWORKS.YOUTUBE:
						icons.push((
							<a href={ url } target='_new'>
								<Icons.Youtube />
							</a>
						));
						break;
					default:
						count -= 1;
						break;
				}
			}

			count += 1;
		}

		icons.unshift((
			<a href={ `http://www.twitter.com/${twitterHandle}` } target='_new'>
				<Icons.Twitter />
			</a>
		));

		return icons;
	};

	render() {
		const {
			biography,
			followers,
			image,
			location,
			name,
			relevance,
			resonance,
			topics
		} = this.props;
		return (
			<div className='orch-influencer'>
				<div className='influencer'>
					<Avatar image={ image }
						size={ 65 } />
					
					<div className='details'>
						<div className='name'>{ name }</div>
						<div className='location'>{ location }</div>
					</div>

					<div className='social-profiles'>
						{ this.renderSocialProfiles() }
					</div>

					<div className='biography'>
						<div className='icon'><Icons.Bio /></div>
						<div className='text'>{ biography }</div>
					</div>
				</div>

				<div className='ip'>
					<div className='scores'>
						<div className='relevance'>
							<div className='value'>{ relevance }</div>
							<span>Relevance</span>
						</div>

						<div className='resonance'>
							<div className='value'>{ resonance }</div>
							<span>Resonance</span>
						</div>

						<div className='followers'>
							<div className='value'>{ followers }</div>
							<span>Network Reach</span>
						</div>
					</div>

					<div className='klout-topics'>
						<div className='title'>topics</div>
						{ this.renderKloutTopics(topics) }
					</div>
				</div>
			</div>
		);
	}
}

export default Influencer;