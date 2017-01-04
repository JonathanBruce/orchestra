/* global document, React, ReactDOM */

import 'sass/ui.scss';
import KeywordTag from 'components/search/KeywordTag.jsx';
import { REQUIREMENTS, SUPPORTED_NETWORKS } from 'maestro';

class KeywordTagTest extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			network: null,
			openNetwork: false,
			openRequirement: false,
			requirement: null
		};
	}

	onNetworkChange = (network) => {
		this.setState({ network });
	};

	onNetworkToggle = () => {
		this.setState({ openNetwork: !this.state.openNetwork });
	};

	onRequirementChange = (requirement) => {
		this.setState({ requirement });

		console.log(this.state.openRequirement);
	};

	onRequirementToggle = () => {
		debugger;
		const { openRequirement } = this.state;

		this.setState({ openRequirement: !openRequirement }, () => {
			console.log(this.state.openRequirement);
		});
	};

	render() {
		const { openNetwork, openRequirement } = this.state;

		return (
			<div id='keyword-tag'>
				<KeywordTag
					defaultValue='A Default Value'
					network={ SUPPORTED_NETWORKS.TWITTER }
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
					requirement={ REQUIREMENTS.NEUTRAL } />
			</div>
		);
	}
}

ReactDOM.render(<KeywordTagTest />, document.getElementById('test'));