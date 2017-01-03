/* global document, React, ReactDOM */

import classnames from 'classnames';
import Component from 'components/extensions/Component.jsx';
import Icons from 'icons/_all';
import { isFunction } from 'lib/core';
import Menu from '../form/Menu.jsx';
import { REQUIREMENTS, SUPPORTED_NETWORKS } from 'maestro';
import { toUpperCaseFirstCharacter } from 'lib/string';

class KeywordTag extends Component {
	static propTypes = {
		defaultValue: React.PropTypes.string,
		edit: React.PropTypes.bool,
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

	componentDidMount() {
		const { edit } = this.props;

		if (edit) {
			const { keyword } = this.refs;

			keyword.focus();
		}
	}

	static defaultProps = {
		openNetwork: false,
		openRequirement: false,
		network: SUPPORTED_NETWORKS.ALL
	};

	constructor(props) {
		super(props);

		this.state = {
			edit: this.props && this.props.edit ? this.props.edit : false,
			value: this.props && this.props.defaultValue ? this.props.defaultValue : ''
		};
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
	 * Hides the dropdown list
	 * @param event Event object
	 */
	hideMenu = (obj) => {
		const menuNode = ReactDOM.findDOMNode(obj.menu);
		const menuOptionsNode = menuNode && menuNode.children[ 0 ];
		const { target } = obj.event;

		if (menuOptionsNode && !menuOptionsNode.contains(target) && obj.open) {
			obj.toggle();
		}
	};

	/**
	 * Wrapper for hide menu
	 */
	hideNetworkMenu = (event) => {
		const { openNetwork } = this.props;

		if (openNetwork) {
			this.hideMenu({
				event,
				menu: this.networkMenu,
				open: openNetwork,
				toggle: this.onToggleNetwork
			});
		}
	};

	/**
	 * Wrapper for hide menu
	 */
	hideRequirementMenu = (event) => {
		const { openRequirement } = this.props;

		if (openRequirement) {
			this.hideMenu({
				event,
				menu: this.requirementMenu,
				open: openRequirement,
				toggle: this.onToggleRequirement
			});
		}
	};

	/**
	 * Toggles network
	 */
	onNetworkToggle = () => {
		const { onNetworkToggle } = this.props;

		onNetworkToggle();
		this.removeHideMenuListener(this.hideNetworkMenu);
	};

	/**
	 * Toggles requirement
	 */
	onRequirementToggle = () => {
		const { onRequirementToggle } = this.props;

		onRequirementToggle();
		this.removeHideMenuListener(this.hideRequirementMenu);
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
		}

		onTagChange(value);
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
		const { openNetwork, network } = this.props;
		const networks = Object.values(SUPPORTED_NETWORKS);

		if (this.hasNetworkChange() && networks.indexOf(network) > -1) {
			networks.splice(networks.indexOf(network), 1);

			return (
				<div
					className='network'
					onClick={ this.showNetworkMenu }>
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
						onClick={ this.showRequirementMenu }>
						{ requirementIcon }
						<Icons.SmallChevron className='chevron' />
						{ openRequirement && this.hasRequirementChange() && requirementMenu }
					</div>
				);
			}

			return (
				<div className='requirement'>
					{ requirementIcon }
				</div>
			);
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
		const { onNetworkChange } = this.props;
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
				onToggle={ this.onNetworkToggle }
				ref={
					(networkMenu) => {
						this.networkMenu = networkMenu;
					}
				} />
		);
	};

	/**
	 * Renders requirement menu
	 */
	renderRequirementMenu = (options) => {
		const { onRequirementChange } = this.props;
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
				onToggle={ this.onRequirementToggle }
				ref={
					(requirementMenu) => {
						this.requirementMenu = requirementMenu;
					}
				} />
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
	 * Shows menu
	 */
	showMenu = (open, toggle, hide) => {
		if (!open) {
			toggle();
			document.body.addEventListener('click', hide);
		}
	};

	/**
	 * Wrapper for show menu for network
	 */
	showNetworkMenu = () => {
		const { openNetwork, onNetworkToggle } = this.props;

		this.showMenu(openNetwork, onNetworkToggle, this.hideNetworkMenu);
	};

	/**
	 * Wrapper for show menu for network
	 */
	showRequirementMenu = () => {
		const { openRequirement, onRequirementToggle } = this.props;

		this.showMenu(openRequirement, onRequirementToggle, this.hideRequirementMenu);
	};

	/**
	 * Sets value state
	 */
	setValue = (param) => {
		this.setState({
			value: param && param.hasOwnProperty('target') ? param.target.value : param
		});
	};

	/**
	 * Removes hideMenu event listener
	 */
	removeHideMenuListener = (hide) => {
		document.body.removeEventListener('click', hide);
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
							Click here to add a tag...
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