/* eslint-disable no-console */
/* global console, React */

import {
	Avatar,
	Container,
	FilterBox,
	Four,
	Icons,
	Notifier,
	PulseLoader,
	Three,
	Twelve,
	Two
} from '../../src/ui';

class Misc extends React.Component {
	render() {
		return (
			<Container>
				<Twelve>
					<a id='misc'/>
					<h2>Miscellaneous</h2>
				</Twelve>

				<Three>
					<p>Pulse.jsx</p>
					<PulseLoader size={ 100 } />
					<PulseLoader
						prompt={ 'loading text here' }
						size={ 100 } />
				</Three>


				<Four>
					<p>FilterBox.jsx</p>
					<FilterBox
						onMenuWidgetToggle={
							() => {
								console.log('toggled widget');
							}
						}
						title={ 'Influencers Of' }
						tooltipTitle={ 'Info Title' }
						tooltipValue={ 'This is Information' }
						menuWidget={ <div>Widget Content</div> }
						menuWidgetIcon={ <Icons.Search /> }
						menuWidgetOpen={ false }>
						<div>Content 1</div>
						<div>Content 2</div>
					</FilterBox>

					<FilterBox
						onWidgetToggle={
							() => {
								console.log('toggled widget');
							}
						}
						title={ 'Bio Topic' }
						titleIcon={ <Icons.Instagram /> }
						tooltipTitle={ 'Info Title' }
						tooltipValue={ 'This is Information' }
						menuWidget={ <div>Widget Content</div> }
						menuWidgetIcon={ <Icons.Search /> }
						menuWidgetOpen={ true }>
						<div>Content 1</div>
						<div>Content 2</div>
					</FilterBox>
				</Four>

				<Two>
					<p>Notifier.jsx</p>
					<Notifier
						icon={ <Icons.AdvancedSearch /> }
						onClick={ () => {
							console.log('notifier clicked');
						} }
						value={ 3 } />

					<p>Notifier.jsx disabled</p>
					<Notifier
						active
						disabled
						icon={ <Icons.AdvancedSearch /> }
						value={ 3 } />
				</Two>

				<Two>
					<p>Avatar.jsx</p>
					<Avatar />
					<Avatar
						image='https://pbs.twimg.com/profile_images/489091337690419200/L_r1zbKT_400x400.png'
						size={ 68 } />
				</Two>
			</Container>
		);
	}
}

export default Misc;