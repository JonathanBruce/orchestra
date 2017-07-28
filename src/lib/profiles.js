import { ALL_NETWORKS, SOCIAL_PROFILES } from 'sheet-music';

/**
 * returns the social profiles in order based on their position in an array
 * @param  {object} socialProfiles hashmap of social profiles
 * @return {array}                 array of social profiles in sorted order
 */
export function getSocialProfileOrder(socialProfiles = {}) {
	const keys = Object.keys(socialProfiles);

	return keys.map((key) => {
		const profile = socialProfiles[ key ];

		profile.type = key;
		profile.pos = SOCIAL_PROFILES[ key.toUpperCase() ] || 0;

		return profile;
	}).sort((a, b) => a.pos - b.pos);
}

/**
 * parses social profiles for show and hide profiles for the person tile
 * @param  {object} socialProfiles hashmaps of social profile mappings by name
 * @param  {number} showCount      number of profiles to show
 * @return {object}                object containing showProfiles and hiddenProfiles
 */
export function parseSocialProfiles(socialProfiles, showCount) {
	const validProfiles = {};

	Object.keys(socialProfiles).forEach((profilesType) => {
		if (ALL_NETWORKS[ profilesType.toUpperCase() ]) {
			validProfiles[ profilesType ] = socialProfiles[ profilesType ];
		}
	});

	const profiles = getSocialProfileOrder(validProfiles);
	let showProfiles = profiles;
	let hiddenProfiles = [];

	if (showCount >= 0) {
		showProfiles = profiles.slice(0, showCount);
		hiddenProfiles = profiles.slice(showCount);
	}

	return {
		showProfiles,
		hiddenProfiles
	};
}