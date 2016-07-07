/* global React */

import classnames from 'classnames';
import Component from 'components/extensions/Component.jsx';
import SubHeader from 'components/base/SubHeader.jsx';

class LinksSubHeader extends Component {
	static propTypes = {
		links: React.PropTypes.arrayOf(
			React.PropTypes.shape({
				active: React.PropTypes.bool,
				label: React.PropTypes.string,
				value: React.PropTypes.string
			})
		).isRequired,
		onClick: React.PropTypes.func.isRequired
	};

	onClick = (value) => {
		const { onClick } = this.props;

		onClick(value);
	};

	render() {
		const { links } = this.props;

		return (
			<SubHeader className='orch-links-sub-header'>
				<ul className='links'>
					{
						links.map((obj, index) => {
							const {
								active,
								label,
								value
							} = obj;
							const itemClassnames = classnames({
								active: active || false,
								item: true
							});

							return (
								<li className={ itemClassnames }
								key={ index }
								onClick={ !active && this.onClick.bind(this, value) }>{ label }</li>
							);
						})
					}
				</ul>
			</SubHeader>
		);
	}
}

export default LinksSubHeader;