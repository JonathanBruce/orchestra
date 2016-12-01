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
		profiles: React.PropTypes.array,
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

	/**
	 * Renders Klout Topics
	 */
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

	/**
	 * Renders social profile icons
	 */
	renderSocialProfileIcons = () => {
		const { profiles } = this.props;
		const sortedProfiles = this.sortSocialProfileIcons(profiles);
		const icons = [];
		let count = 0;

		console.log(sortedProfiles);

		for (const sortedProfile of sortedProfiles) {
			const { type, url } = sortedProfile;
			const networks = Object.values(NETWORKS);

			if (networks.indexOf(type) > -1 && count < 6) {
				const network = type[ 0 ].toUpperCase() + type.slice(1);
				const NetworkIcon = Icons[ network ];

				if (NetworkIcon) {
					icons.push((
						<a href={ url } target='_new'>
							<NetworkIcon />
						</a>
					));

					count += 1;
				}
			}
		}

		return icons;
	};

	/**
	 * Sorts social profile icons
	 */
	sortSocialProfileIcons = (profiles) => {
		return profiles.sort((a, b) => {
			return b.pos - a.pos;
		});
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
						{ this.renderSocialProfileIcons() }
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