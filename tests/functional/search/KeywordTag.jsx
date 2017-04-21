/* eslint-disable no-console */
/* global console, document, React, ReactDOM */

import 'sass/ui.scss';
import KeywordTag from 'components/search/KeywordTag.jsx';
import { BIO_PROFILE_KEYWORD_NETWORKS, REQUIREMENTS } from 'sheet-music';

class KeywordTagTest extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			network: null,
			openNetwork: false,
			openNetworkTwo: false,
			openOptions: false,
			openRequirement: false,
			openRequirementTwo: false,
			optionValue: 'foo',
			previewClicked: false,
			requirement: null
		};
	}

	onNetworkChange = (network) => {
		this.setState({ network });
	};

	onNetworkToggle = () => {
		this.setState({ openNetwork: !this.state.openNetwork });
	};

	onNetworkToggleTwo = () => {
		this.setState({ openNetworkTwo: !this.state.openNetworkTwo });
	};

	onOptionsChange = (optionValue) => {
		this.setState({ optionValue });
	};

	onOptionsToggle = () => {
		this.setState({ openOptions: !this.state.openOptions });
	};

	onRequirementChange = (requirement) => {
		this.setState({ requirement });

		console.log(this.state.openRequirement);
	};

	onRequirementToggle = () => {
		const { openRequirement } = this.state;

		this.setState({ openRequirement: !openRequirement }, () => {
			console.log(this.state.openRequirement);
		});
	};

	onRequirementToggleTwo = () => {
		const { openRequirementTwo } = this.state;

		this.setState({ openRequirementTwo: !openRequirementTwo }, () => {
			console.log(this.state.openRequirementTwo);
		});
	};

	onPreviewClick = () => {
		console.log('suh');
		this.setState({ previewClicked: true });
	};

	render() {
		const {
			openNetwork,
			openNetworkTwo,
			openOptions,
			openRequirement,
			openRequirementTwo,
			optionValue,
			previewClicked
		} = this.state;

		return (
			<div id='keyword-tag'>
				<div id='uneditable'>
					<KeywordTag
						defaultValue='A Default Value'
						editable={ false }
						requirement={ REQUIREMENTS.NEUTRAL } />
				</div>

				<div id='thumbnail-trump'>
					<KeywordTag
						defaultValue='A Default Value'
						network={ BIO_PROFILE_KEYWORD_NETWORKS.TWITTER }
						onDeleteClick={
							() => {
								console.log('delete');
							}
						}
						onNetworkChange={ this.onNetworkChange }
						onNetworkToggle={ this.onNetworkToggle }
						onRequirementToggle={ this.onRequirementToggle }
						onRequirementChange={ this.onRequirementChange }
						onTagChange={
							() => {
								console.log('tag changed');
							}
						}
						openNetwork={ openNetwork }
						openRequirement={ openRequirement }
						requirement={ REQUIREMENTS.NEUTRAL }
						thumbnail='url' />
				</div>

				<div id='delete-exists'>
					<KeywordTag
						defaultValue='A Default Value'
						onDeleteClick={
							() => {
								console.log('delete');
							}
						}
						requirement={ REQUIREMENTS.NEUTRAL } />
				</div>

				<div id='delete-doesnt-exist'>
					<KeywordTag
						defaultValue='A Default Value'
						requirement={ REQUIREMENTS.NEUTRAL } />
				</div>

				<div id='preview-click-exists'>
					<KeywordTag
						defaultValue='A Default Value'
						onPreviewClick={ this.onPreviewClick }
						requirement={ REQUIREMENTS.NEUTRAL } />
				</div>

				<div id='preview-click-doesnt-exist'>
					<KeywordTag
						defaultValue='A Default Value'
						disabled={ true }
						editable={ false }
						requirement={ REQUIREMENTS.NEUTRAL } />
				</div>

				<div id='selected'>
					<KeywordTag
						defaultValue='A Default Value'
						selected
						requirement={ REQUIREMENTS.NEUTRAL } />
				</div>

				<div id='preview-clicked'>
					{ previewClicked ? 'Clicked!' : 'Not Clicked' }
				</div>

				<KeywordTag
					defaultValue='A Default Value'
					network={ BIO_PROFILE_KEYWORD_NETWORKS.TWITTER }
					onDeleteClick={
						() => {
							console.log('delete');
						}
					}
					onNetworkChange={ this.onNetworkChange }
					onNetworkToggle={ this.onNetworkToggleTwo }
					onRequirementToggle={ this.onRequirementToggleTwo }
					onRequirementChange={ this.onRequirementChange }
					onTagChange={
						() => {
							console.log('tag changed');
						}
					}
					openNetwork={ openNetworkTwo }
					openRequirement={ openRequirementTwo }
					requirement={ REQUIREMENTS.NEUTRAL } />

				<KeywordTag
					defaultValue={ optionValue }
					onOptionsChange={ this.onOptionsChange }
					onOptionsToggle={ this.onOptionsToggle }
					onRequirementChange={ this.onRequirementChange }
					onDeleteClick={
						() => {
							console.log('delete');
						}
					}
					options={
						[
							{ label: 'Foo', value: 'foo' },
							{ label: 'Bar', value: 'bar' },
							{ label: 'Baz', value: 'baz' }
						]
					}
					openOptions={ openOptions } />
			</div>
		);
	}
}

ReactDOM.render(<KeywordTagTest />, document.getElementById('test'));