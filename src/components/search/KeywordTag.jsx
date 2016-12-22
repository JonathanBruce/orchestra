/* global React */

import classnames from 'classnames';
import Component from 'components/extensions/Component.jsx';
import Icons from 'icons/_all';
import { isFunction } from 'lib/core';
import Menu from '../form/Menu.jsx';
import { REQUIREMENTS, SUPPORTED_NETWORKS } from 'constants/KEYWORD_TAGS';
import { toUpperCaseFirstCharacter } from 'lib/string';

class KeywordTag extends Component {
	static propTypes = {
		defaultValue: React.PropTypes.string,
		id: React.PropTypes.string,
		onDeleteClick: React.PropTypes.func,
		onEmptyClick: React.PropTypes.func,
		network: React.PropTypes.string,
		onNetworkChange: React.PropTypes.func,
		onNetworkToggle: React.PropTypes.func,
		openNetwork: React.PropTypes.boolean,
		onRequirementChange: React.PropTypes.func,
		onRequirementToggle: React.PropTypes.func,
		openRequirement: React.PropTypes.boolean,
		onTagChange: React.PropTypes.func.isRequired,
		requirement: React.PropTypes.string
	};

	constructor(props) {
		super(props);

		this.state = {
			edit: false,
			value: this.props && this.props.defaultValue ? this.props.defaultValue : ''
		};
	}

	static defaultProps = {
		openNetwork: false,
		openRequirement: false,
		network: SUPPORTED_NETWORKS.ALL
	};

	componentWillMount() {
		const {
			network,
			onNetworkChange,
			requirement,
			onRequirementChange
		} = this.props;

		if (!network
			&& !onNetworkChange
			&& !requirement 
			&& !onRequirementChange) {
			throw new Error('No network or requirement!');
		}

		if (requirement
			&& requirement !== REQUIREMENTS.STREAM
			&& requirement !== REQUIREMENTS.EMPTY 
			&& !onRequirementChange) {
			throw new Error('Requirement present but no onRequirementChange passed!');
		}
	}

	/**
	 * Checks if has onNetworkChange
	 */
	hasNetworkChange = () => {
		const { onNetworkChange } = this.props;

		return isFunction(onNetworkChange);
	};

	/**
	 * Checks if has onRequirementChange
	 */
	hasRequirementChange = () => {
		const { onRequirementChange } = this.props;

		return isFunction(onRequirementChange);
	};

	/**
	 * Listens for tag clicks
	 */
	onTagClick = () => {
		this.setEdit(true, () => {
			const { keyword } = this.refs;

			keyword.focus();
			keyword.select();
		});
	};

	/**
	 * Listens for key down on input
	 */
	onTagKeyDown = (event) => {
		const { keyCode } = event;
		const { onTagChange } = this.props;
		const { value } = this.state;

		if (keyCode === 13) {
			this.onTagBlur();
		}
	};

	/**
	 * Blurs input
	 */
	onTagBlur = () => {
		const { onTagChange } = this.props;
		const { value } = this.state;

		this.setEdit(false);

		if (value.length === 0) {
			this.setValue(this.props.defaultValue);
		}

		if (value !== this.props.defaultValue) {
			this.setValue(value);
			onTagChange(value);
		}
	};

	/**
	 * Renders delete
	 */
	renderDelete = () => {
		const { edit } = this.state;
		const { onDeleteClick } = this.props;

		if (!edit) {
			return (
				<div
					className='delete'
					onClick={ onDeleteClick }>
					<Icons.Ex />
				</div>
			);
		}
	};

	/**
	 * Renders network icon
	 */
	renderNetworkIcon = (network) => {
		let NetworkIcon;

		if (network && network.length) {
			try {
				NetworkIcon = Icons[ toUpperCaseFirstCharacter(network) ];
			}
			catch (e) {
				throw new Error('No icon for that network!');
			}
		}

		return NetworkIcon
			? (
				<NetworkIcon className='icon' />
			)
			: (
				<span>All</span>
			);
	}

	/**
	 * Renders requirement icon
	 */
	renderRequirementIcon = (requirement) => {
		switch (requirement) {
			case REQUIREMENTS.EXCLUDE:
				return (
					<Icons.Exclude className='icon' />
				);
			case REQUIREMENTS.LOCKED:
				return (
					<Icons.Lock className='icon' />
				);
			case REQUIREMENTS.NEUTRAL:
				return (
					<Icons.Filter className='icon' />
				);
			case REQUIREMENTS.STREAM:
				return (
					<Icons.ChatBubble className='icon' />
				);
			default:
				break;
		}
	};

	/**
	 * Renders requirement dropdown
	 */
	renderNetworkDropDown = () => {
		const {
			onNetworkToggle,
			openNetwork,
			network
		} = this.props;
		const networks = Object.values(SUPPORTED_NETWORKS);

		if (this.hasNetworkChange() && networks.indexOf(network) > -1) {
			networks.splice(networks.indexOf(network), 1);

			return (
				<div
					className='network'
					onClick={ !openNetwork && onNetworkToggle }>
					{ this.renderNetworkIcon(network) }
					<Icons.SmallChevron className='chevron' />
					{ openNetwork && this.renderNetworkMenu(networks) }
				</div>
			);
		}
	};

	/**
	 * Renders requirement dropdown
	 */
	renderRequirementDropDown = () => {
		const {
			onRequirementToggle,
			openRequirement,
			requirement
		} = this.props;
		const requirements = Object.values(REQUIREMENTS);

		if (requirements.indexOf(requirement) > -1) {
			const requirementIcon = this.renderRequirementIcon(requirement);

			if (requirement !== REQUIREMENTS.STREAM) {
				requirements.splice(requirements.indexOf(REQUIREMENTS.STREAM), 1);
				requirements.splice(requirements.indexOf(REQUIREMENTS.EMPTY), 1);
				requirements.splice(requirements.indexOf(requirement), 1);

				const requirementMenu = this.renderRequirementMenu(requirements);

				return (
					<div
						className='requirement'
						onClick={ !openRequirement && onRequirementToggle }>
						{ requirementIcon }
						<Icons.SmallChevron className='chevron' />
						{ openRequirement && this.hasRequirementChange() && requirementMenu }
					</div>
				);
			}
			else {
				return (
					<div className='requirement'>
						{ requirementIcon }
					</div>
				);
			}
		}
	};

	/**
	 * Renders keyword
	 */
	renderKeyword = () => {
		const { edit, value } = this.state;
		const subLength = 22;
		let subValue;

		if (value.length < subLength) {
			subValue = value;
		}
		else if (this.hasNetworkChange() && this.hasRequirementChange()) {
			subValue = value.substring(0, subLength - 5) + '...';
		}
		else {
			subValue = value.substring(0, subLength - 1) + '...';
		}

		return (
			<div
				className='keyword'
				onClick={ this.onTagClick }>
				{
					!edit
					? subValue
					: (
						<input
							onBlur={ this.onTagBlur }
							onChange={ this.setValue }
							onKeyDown={ this.onTagKeyDown }
							placeholder='Start typing...'
							ref='keyword'
							type='text'
							value={ this.state.value } />
					)
				}
			</div>
		);
	};

	/**
	 * Renders menu option
	 */
	renderNetworkMenuOption = (option) => {
		const networkIcon = this.renderNetworkIcon(option);
		const text = toUpperCaseFirstCharacter(option);

		return (
			<div>
				{ networkIcon }
				{ `Click for ${text}` }
			</div>
		);
	};

	/**
	 * Renders menu option
	 */
	renderRequirementMenuOption = (option) => {
		const requirementIcon = this.renderRequirementIcon(option);
		const text = toUpperCaseFirstCharacter(option);

		return (
			<div>
				{ requirementIcon }
				{ `Click for ${text}` }
			</div>
		);
	};

	/**
	 * Renders network menu
	 */
	renderNetworkMenu = (options) => {
		const { onNetworkChange, onNetworkToggle } = this.props;
		const networkOptions = options.map((option) => {
			return {
				label: this.renderNetworkMenuOption(option),
				value: option
			};
		});

		return (
			<Menu
				options={ networkOptions }
				onChange={ onNetworkChange } 
				onToggle={ onNetworkToggle } />
		);
	};

	/**
	 * Renders requirement menu
	 */
	renderRequirementMenu = (options) => {
		const { onRequirementChange, onRequirementToggle } = this.props;
		const requirementOptions = options.map((option) => {
			return {
				label: this.renderRequirementMenuOption(option),
				value: option
			};
		});

		return (
			<Menu
				options={ requirementOptions }
				onChange={ onRequirementChange } 
				onToggle={ onRequirementToggle } />
		);
	};

	/**
	 * Sets edit state
	 */
	setEdit = (edit, context) => {
		this.setState({
			edit
		}, context);
	}

	/**
	 * Sets value state
	 */
	setValue = (param) => {
		this.setState({
			value: param && param.hasOwnProperty('target') ? param.target.value : param
		});
	};

	render() {
		const { edit } = this.state;
		const { onEmptyClick } = this.props;
		const requirement = this.props.requirement || REQUIREMENTS.NEUTRAL;
		const keywordTagClasses = classnames('orch-keyword-tag', {
			edit,
			[ requirement ]: true,
			'with-network-and-requirement': this.hasNetworkChange() && this.hasRequirementChange()
		});

		return (
			<div className={ keywordTagClasses }>
				{
					requirement === REQUIREMENTS.EMPTY
					? (
						<div
							className='tag clearfix'
							onClick={ onEmptyClick }>
							Type here to add another...
						</div>
					)
					: (
						<div
							className='tag clearfix'>
							{ this.renderNetworkDropDown() }
							{ this.renderRequirementDropDown() }
							{ this.renderKeyword() }
							{ this.renderDelete() }
						</div>
					)
				}
			</div>
		);
	}
}

export default KeywordTag;