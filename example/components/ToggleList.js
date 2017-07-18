/* eslint-disable no-console */
/* global console, React */

import {
	APP,
	CheckBox,
	Container,
	PaginationApprove,
	PaginationControls,
	PillToggle,
	RangeSlider,
	Slider,
	Switch,
	Three,
	Twelve
} from '../../src/ui';

class ToggleList extends React.Component {
	render() {
		return (
			<Container>
				<Twelve>
					<a id='toggles'/>
					<h2>Toggles, Sliders, and Pagination</h2>
				</Twelve>

				<Three>
					<p>PillToggle.jsx</p>

					<PillToggle items={
						[
							{
								active: true,
								label: 'A',
								value: 'a'
							},
							{
								active: false,
								label: 'B',
								notifications: [ 12, APP.ERROR ],
								value: 'b'
							},
							{
								active: false,
								label: 'C',
								notifications: [ 12, APP.INFORMATION ],
								value: 'c'
							},
							{
								active: false,
								label: 'D',
								value: 'd'
							}
						]
					} onClick={
						(value) => {
							console.log(value);
						}
					} />
				</Three>

				<Three>
					<p>CheckBox.jsx</p>

					<CheckBox onClick={
						(value) => {
							console.log(value);
						}
					} label='Option A' />

					<CheckBox
						checked
						onChange={
							(value) => {
								console.log(value);
							}
						}
						onClick={
							(value) => {
								console.log(value);
							}
						}
						label='Option B' />

					<CheckBox disabled onClick={
						(value) => {
							console.log(value);
						}
					} label='Option C' />

					<CheckBox
						checked
						disabled
						onClick={
							(value) => {
								console.log(value);
							}
						}
						onChange={
							(value) => {
								console.log(value);
							}
						}
						label='Option D' />
				</Three>

				<Three>
					<p>PaginationControls.jsx</p>

					<PaginationControls
						onDecreaseClick={
							() => {
								console.log('decreasing');
							}
						}
						onIncreaseClick={
							() => {
								console.log('increasing');
							}
						}
						decreaseDisabled={ 1 === 2 }
						increaseDisabled={ true } />

					<PaginationControls
						onDecreaseClick={
							() => {
								console.log('decreasing');
							}
						}
						onIncreaseClick={
							() => {
								console.log('increasing');
							}
						}
						decreaseDisabled={ false }
						increaseDisabled={ false } />
				</Three>

				<Three>
					<p>PaginationApprove.jsx</p>
					<PaginationApprove
						approveDisabled={ false }
						currentPage={ 1 }
						onApproveClick={
							() => {
								console.log('approving');
							}
						}
						onDecreaseClick={
							() => {
								console.log('decreasing');
							}
						}
						onIncreaseClick={
							() => {
								console.log('increasing');
							}
						}
						totalPages={ 5 } />

					<PaginationApprove
						approveDisabled={ false }
						currentPage={ 5 }
						onApproveClick={
							() => {
								console.log('approving');
							}
						}
						onDecreaseClick={
							() => {
								console.log('decreasing');
							}
						}
						onIncreaseClick={
							() => {
								console.log('increasing');
							}
						}
						totalPages={ 5 } />

					<PaginationApprove
						approveDisabled={ false }
						currentPage={ 0 }
						onApproveClick={
							() => {
								console.log('approving');
							}
						}
						onDecreaseClick={
							() => {
								console.log('decreasing');
							}
						}
						onIncreaseClick={
							() => {
								console.log('increasing');
							}
						}
						totalPages={ 5 } />
				</Three>

				<Three>
					<p>Switch.jsx</p>
					<Switch
						onClick={
							(value) => {
								console.log(value);
							}
						} />

					<Switch
						active
						onClick={
							(value) => {
								console.log(value);
							}
						} />
				</Three>

				<Three>
					<p>Slider.jsx</p>

					<Slider
						defaultValue={ 40 }
						disabled
						label='foo'
						max={ 365 }
						min={ 0 }
						onDragChange={
							(sliderValue) => {
								this.setState({ sliderValue });
							}
						} />

					<Slider
						defaultValue={ 0 }
						interval={ 5 }
						label='bar'
						max={ 20 }
						min={ 0 }
						onDragChange={
							(sliderValue) => {
								this.setState({ sliderValue });
							}
						}
						onDragEnd={
							(value) => {
								console.log('on drag end', value);
							}
						}
						onDragStart={
							(sliderValue) => {
								this.setState({ sliderValue });
							}
						} />
				</Three>

				<Three>
					<p>RangeSlider.jsx</p>
					<RangeSlider
						interval={ 1 }
						max={ 1000001 }
						maxDisplay={ 5000 }
						maxLabel='1m+'
						maxValue={ 5000 }
						min={ 0 }
						minDisplay={ 5 }
						minLabel='0'
						minValue={ 5 }
						width={ 193 }/>

				</Three>
			</Container>
		);
	}
}

export default ToggleList;