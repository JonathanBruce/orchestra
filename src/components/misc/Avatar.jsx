/* global React */

import Icons from 'icons/_all';

class Avatar extends React.Component {
	static propTypes = {
		image: React.PropTypes.string.isRequired,
		size: React.PropTypes.number
	};

	constructor(props) {
		super(props);
		this.state = {
			imageError: false
		};
	}

	onImageError = () => {
		this.setState({
			imageError: true
		});
	};

	renderImage = () => {
		const { image, size } = this.props;
		const imageStyles = {
			'border-radius': (size / 2)
		};

		if (!this.state.imageError && image) {
			return (
				<img onError={ this.onImageError }
					src={ image }
					style={ imageStyles } />
			);
		}

		return (
			<Icons.DefaultAvatar />
		);
	};

	render() {
		const { size } = this.props;
		const avatarStyles = {
			height: size,
			width: size
		};

		return (
			<div className='orch-avatar' style={ avatarStyles }>
				{ this.renderImage() }
			</div>
		);
	}
}

export default Avatar;