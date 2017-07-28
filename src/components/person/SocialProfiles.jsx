/* global React */

import { ALL_NETWORKS } from 'sheet-music';
import Component from 'components/extensions/Component.jsx';
import Icons from 'icons/_all';
import { shortenNumber } from 'lib/string';
import { parseSocialProfiles } from 'lib/profiles';

class SocialProfiles extends Component {
	static propTypes = {
		profiles: React.PropTypes.array,
		showCount: React.PropTypes.number
	};

	static defaultProps = {
		profiles: [],
		showCount: -1
	};

	render() {
		const {
			profiles,
			showCount
		} = this.props;
		const { showProfiles, hiddenProfiles } = parseSocialProfiles(profiles, showCount);

		return (
			<div className='orch-social-profiles'>
				{
					showProfiles && showProfiles.map((profile, index) => {
						if (profile && Object.keys(profile).length) {
							const { followers, type, url } = profile;
							const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
							const SocialButton = Icons[ capitalized ];
							let greaterFollowerCount = type === ALL_NETWORKS.LINKEDIN && followers === 500;

							return (
								<div className='profile' key={ index }>
									<a href={ url } target='_blank' onClick={ this.handleStopBubble }>
										<SocialButton/>
									</a>
									<div className='follower-count'>
										{ shortenNumber(followers) }
										{
											greaterFollowerCount
											&& (
												<div className='plus'>+</div>
											)
										}
									</div>
								</div>
							);
						}
					})
				}
				{
					hiddenProfiles.length > 0
					&& (
						<div className='profile additional-bubble'>
							+{ hiddenProfiles.length }
						</div>
					)
				}
			</div>
		);
	}
}

export default SocialProfiles;