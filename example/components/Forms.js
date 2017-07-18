/* eslint-disable no-console */
/* global console, React */

import {
	ACTION_MENU,
	ActionMenu,
	Container,
	DropDown,
	HighlightTag,
	Icons,
	Input,
	KeywordTag,
	NestedMenu,
	RESOURCE_ACTION_DROPDOWN,
	ResourceActionDropDown,
	Textarea,
	Three,
	Twelve,
	ValueActionDropDown
} from '../../src/ui';
import { REQUIREMENTS } from 'sheet-music';

class Forms extends React.Component {
	render() {
		return (
			<Container>
				<Twelve>
					<a id='dropdowns'/>
					<h2>Forms</h2>
				</Twelve>

				<Three>
					<p>dropdowns/Generic.jsx</p>

					<DropDown
						label='DropDown'
						onChange={
							(value) => {
								console.log(value);
							}
						}
						onToggle={
							() => {
								console.log('toggled');
							}
						}
						options={
							[
								{ label: 'one', value: 1 },
								{ label: 'two', value: 2 },
								{ label: 'three', value: 3 }
							]
						}
						selected={ 1 } />
				</Three>

				<Three>
					<DropDown
						active
						onChange={
							(value) => {
								console.log(value);
							}
						}
						onToggle={
							() => {
								console.log('toggled');
							}
						}
						options={
							[
								{ label: 'one', value: 1 },
								{ label: 'two', value: 2 },
								{ label: 'three', value: 3 },
								{ label: 'four', value: 4 }
							]
						}
						selected={ 1 } />
				</Three>

				<Three>
					<DropDown
						active
						onChange={
							(value) => {
								console.log(value);
							}
						}
						onToggle={
							() => {
								console.log('toggled');
							}
						}
						options={
							[
								{ label: 'one extremely long label that should be cut off if it knows what is good for it', value: 1 },
								{ label: 'two', value: 2 },
								{ label: 'three', value: 3 },
								{ label: 'four', value: 4 }
							]
						}
						selected={ 1 } />
				</Three>

				<Three>
					<p>dropdowns/Generic.jsx disabled</p>

					<DropDown
						disabled
						label='Disabled DropDown'
						onChange={
							(value) => {
								console.log(value);
							}
						}
						onToggle={
							() => {
								console.log('toggled');
							}
						}
						options={
							[
								{ label: 'one', value: 1 },
								{ label: 'two', value: 2 },
								{ label: 'three', value: 3 }
							]
						} />
				</Three>

				<Three>
					<p>ValueAction.jsx</p>

					<ValueActionDropDown
						title='Add To Segment'
						value='1.1K'>
						Content
					</ValueActionDropDown>
				</Three>

				<Three>
					<p>ResourceAction.jsx</p>
					<ResourceActionDropDown
						state={ RESOURCE_ACTION_DROPDOWN.SAVE }
						position={ ACTION_MENU.RIGHT }>
						Content
					</ResourceActionDropDown>
				</Three>

				<Three>
					<p>ValueAction.jsx</p>
					<ValueActionDropDown
						title='Add To Segment'
						position={ ACTION_MENU.RIGHT }>
						Content
					</ValueActionDropDown>
				</Three>

				<Three>
					<p>Nested.jsx</p>

					<NestedMenu
						onChange={
							(value) => {
								console.log(value);
							}
						}
						onToggle={
							() => {
								console.log('toggled');
							}
						}
						options={
							[
								{ icon: ( <Icons.Links /> ), label: 'one', value: 1 },
								{ icon: ( <Icons.Pencil /> ), label: 'two', value: 2 },
								{ icon: ( <Icons.Segments /> ), label: 'three', value: 3, widget: ( <ActionMenu>Content</ActionMenu> ) }
							]
						} />
				</Three>

				<Three>
					<p>Input.jsx</p>

					<Input
						onChange={
							(value) => {
								console.log(value);
							}
						}
						placeholder='Username'
						type='text' />
				</Three>

				<Three>
					<p>Input.jsx error</p>

					<Input
						defaultValue='Error Text'
						error={ true }
						onChange={
							(value) => {
								console.log(value);
							}
						}
						placeholder='Username'
						type='text' />
				</Three>

				<Three>
					<p>Input.jsx disabled</p>

					<Input
						defaultValue='Disabled text'
						disabled={ true }
						onChange={
							(value) => {
								console.log(value);
							}
						}
						placeholder='Username'
						type='text' />
				</Three>

				<Three>
					<p>Textarea.jsx</p>
					<Textarea
						defaultValue='normal text'
						onChange={
							(value) => {
								console.log(value);
							}
						}
						placeholder='username'/>
				</Three>

				<Three>
					<p>Textarea.jsx error</p>

					<Textarea
						defaultValue='error text'
						error={ true }
						onChange={
							(value) => {
								console.log(value);
							}
						}
						placeholder='username'/>
				</Three>

				<Three>
					<p>Textarea.jsx disabled</p>

					<Textarea
						defaultValue='Disabled text'
						disabled={ true }
						onChange={
							(value) => {
								console.log(value);
							}
						}
						placeholder='username'/>
				</Three>

				<Three>
					<p>KeywordTag.jsx</p>

					<KeywordTag
						requirement={ REQUIREMENTS.STREAM }
						onDeleteClick={
							() => {
								console.log('delete');
							}
						}
						onTagChange={
							(tag) => {
								console.log(tag);
							}
						}
						onRequirementChange={
							() => {}
						}
						defaultValue='Big Butt So What' />

					<KeywordTag
						network='facebook'
						onDeleteClick={
							() => {
								console.log('delete');
							}
						}
						onNetworkChange={
							(network) => {
								console.log(network);
							}
						}
						onNetworkToggle={
							() => {
								console.log('toggled network');
							}
						}
						onTagChange={
							(tag) => {
								console.log(tag);
							}
						}
						defaultValue='Some value' />

					<KeywordTag
						network='instagram'
						onDeleteClick={
							() => {
								console.log('delete');
							}
						}
						onNetworkChange={
							(network) => {
								console.log(network);
							}
						}
						onNetworkToggle={
							() => {
								console.log('toggled network');
							}
						}
						onTagChange={
							(tag) => {
								console.log(tag);
							}
						}
						defaultValue='Some value' />

					<KeywordTag
						network='linkedin'
						onNetworkChange={
							(network) => {
								console.log(network);
							}
						}
						onNetworkToggle={
							() => {
								console.log('toggled network');
							}
						}
						onTagChange={
							(tag) => {
								console.log(tag);
							}
						}
						defaultValue='Some value' />
				</Three>

				<Three>
					<p>KeywordTag.jsx</p>

					<KeywordTag
						network='youtube'
						onDeleteClick={
							() => {
								console.log('delete');
							}
						}
						onNetworkChange={
							(network) => {
								console.log(network);
							}
						}
						onNetworkToggle={
							() => {
								console.log('toggled network');
							}
						}
						onTagChange={
							(tag) => {
								console.log(tag);
							}
						}
						defaultValue='Some value' />

					<KeywordTag
						requirement='exclude'
						onDeleteClick={
							() => {
								console.log('delete');
							}
						}
						onRequirementChange={
							(requirement) => {
								console.log(requirement);
							}
						}
						onRequirementToggle={
							() => {
								console.log('toggled requirement');
							}
						}
						onTagChange={
							(tag) => {
								console.log(tag);
							}
						}
						defaultValue='Some value' />

					<KeywordTag
						requirement='locked'
						onDeleteClick={
							() => {
								console.log('delete');
							}
						}
						onRequirementChange={
							(requirement) => {
								console.log(requirement);
							}
						}
						onRequirementToggle={
							() => {
								console.log('toggled requirement');
							}
						}
						onTagChange={
							(tag) => {
								console.log(tag);
							}
						}
						defaultValue='Some value' />

					<KeywordTag
						requirement='neutral'
						onDeleteClick={
							() => {
								console.log('delete');
							}
						}
						onRequirementChange={
							(requirement) => {
								console.log(requirement);
							}
						}
						onRequirementToggle={
							() => {
								console.log('toggled requirement');
							}
						}
						onTagChange={
							(tag) => {
								console.log(tag);
							}
						}
						defaultValue='Some value' />
				</Three>

				<Three>
					<p>KeywordTag.jsx</p>

					<KeywordTag
						requirement='stream'
						onDeleteClick={
							() => {
								console.log('delete');
							}
						}
						onTagChange={
							(tag) => {
								console.log(tag);
							}
						}
						defaultValue='Some value' />

					<KeywordTag
						requirement='stream'
						onDeleteClick={
							() => {
								console.log('delete');
							}
						}
						onTagChange={
							(tag) => {
								console.log(tag);
							}
						}
						defaultValue='Some value' />

					<KeywordTag
						network='youtube'
						onDeleteClick={
							() => {
								console.log('delete');
							}
						}
						onNetworkChange={
							(network) => {
								console.log(network);
							}
						}
						onNetworkToggle={
							() => {
								console.log('toggled network');
							}
						}
						requirement='neutral'
						onRequirementChange={
							(requirement) => {
								console.log(requirement);
							}
						}
						onRequirementToggle={
							() => {
								console.log('toggled requirement');
							}
						}
						onTagChange={
							(tag) => {
								console.log(tag);
							}
						}
						defaultValue='Some value' />

					<KeywordTag
						network='youtube'
						onDeleteClick={
							() => {
								console.log('delete');
							}
						}
						onNetworkChange={
							(network) => {
								console.log(network);
							}
						}
						onNetworkToggle={
							() => {
								console.log('toggled network');
							}
						}
						requirement='neutral'
						onRequirementChange={
							(requirement) => {
								console.log(requirement);
							}
						}
						onRequirementToggle={
							() => {
								console.log('toggled requirement');
							}
						}
						onTagChange={
							(tag) => {
								console.log(tag);
							}
						}
						defaultValue='Some value' />

					<KeywordTag
						defaultValue='Puppies'
						edit={ false }
						invalid={ true }
						network='youtube'
						onDeleteClick={
							() => {
								console.log('delete');
							}
						}
						onEditToggle={
							(edit) => {
								console.log(edit);
							}
						}
						onNetworkChange={
							(network) => {
								console.log(network);
							}
						}
						onNetworkToggle={
							() => {
								console.log('toggled network');
							}
						}
						onRequirementChange={
							(requirement) => {
								console.log(requirement);
							}
						}
						requirement='neutral' />
				</Three>

				<Three>
					<p>KeywordTag.jsx</p>

					<KeywordTag
						defaultValue='Home & Design'
						edit={ false }
						editable={ false }
						thumbnail='fonts/7a28b1e5e2c77ab11b7041737b5a2d2f.jpg'
						requirement='neutral' />

					<KeywordTag
						defaultValue='Home & Design'
						edit={ false }
						editable={ false }
						thumbnail='fonts/7a28b1e5e2c77ab11b7041737b5a2d2f.jpg'
						onDeleteClick={
							() => {
								console.log('delete');
							}
						}
						requirement='neutral' />

					<KeywordTag
						disabled={ false }
						openRequirement={ false }
						requirement='neutral'
						onRequirementChange={
							(requirement) => {
								console.log(requirement);
							}
						}
						onRequirementToggle={
							() => {
								console.log('toggled requirement');
							}
						}
						onPreviewClick={
							() => {
								console.log('clicked preview');
							}
						}
						preview={ true }
						defaultValue='Some value' />

					<KeywordTag
						disabled={ false }
						onPreviewClick={
							() => {
								console.log('clicked preview');
							}
						}
						preview={ true }
						thumbnail='fonts/7a28b1e5e2c77ab11b7041737b5a2d2f.jpg'
						defaultValue='Some value' />
				</Three>

				<Three>
					<p>KeywordTag.jsx</p>

					<KeywordTag
						disabled={ false }
						onPreviewClick={
							() => {
								console.log('clicked preview');
							}
						}
						preview={ true }
						thumbnail='https://pbs.twimg.com/profile_images/758493074938957824/oQZlspEJ_400x400.jpg'
						defaultValue='Some value' />

					<KeywordTag
						disabled={ false }
						onPreviewClick={
							() => {
								console.log('clicked preview');
							}
						}
						preview={ true }
						selected
						thumbnail='https://pbs.twimg.com/profile_images/758493074938957824/oQZlspEJ_400x400.jpg'
						defaultValue='Some value' />

					<KeywordTag
						disabled={ true }
						openRequirement={ false }
						requirement='neutral'
						onRequirementChange={
							(requirement) => {
								console.log(requirement);
							}
						}
						onRequirementToggle={
							() => {
								console.log('toggled requirement');
							}
						}
						onPreviewClick={
							() => {
								console.log('clicked preview');
							}
						}
						preview={ true }
						defaultValue='Some value' />

					<KeywordTag
						disabled={ true }
						openRequirement={ false }
						requirement='locked'
						onRequirementChange={
							(requirement) => {
								console.log(requirement);
							}
						}
						onRequirementToggle={
							() => {
								console.log('toggled requirement');
							}
						}
						onTagChange={
							(tag) => {
								console.log(tag);
							}
						}
						onPreviewClick={
							() => {
								console.log('clicked preview');
							}
						}
						preview={ true }
						defaultValue='Some value' />

					<KeywordTag
						disabled={ true }
						openRequirement={ false }
						requirement='exclude'
						onRequirementChange={
							(requirement) => {
								console.log(requirement);
							}
						}
						onRequirementToggle={
							() => {
								console.log('toggled requirement');
							}
						}
						onPreviewClick={
							() => {
								console.log('clicked preview');
							}
						}
						preview={ true }
						defaultValue='Some value' />
				</Three>

				<Three>
					<p>KeywordTag</p>

					<KeywordTag
						defaultValue='Just input'
						onTagChange={
							(tag) => {
								console.log(tag);
							}
						} />

					<KeywordTag
						network='youtube'
						networks={ [ 'youtube' ] }
						openRequirement={ false }
						onNetworkChange={
							(network) => {
								console.log(network);
							}
						}
						onNetworkToggle={
							() => {
								console.log('toggled network');
							}
						}
						requirement='neutral'
						onRequirementChange={
							(requirement) => {
								console.log(requirement);
							}
						}
						onRequirementToggle={
							() => {
								console.log('toggled requirement');
							}
						}
						onTagChange={
							(tag) => {
								console.log(tag);
							}
						}
						defaultValue='Some value' />

					<KeywordTag
						defaultValue={ 'foo' }
						onDeleteClick={
							() => {
								console.log('on delete clicked');
							}
						}
						onOptionsChange={
							(option) => {
								console.log(option);
							}
						}
						onOptionsToggle={
							() => {
								console.log('toggled option');
							}
						}
						onRequirementChange={
							(requirement) => {
								console.log(requirement);
							}
						}
						onRequirementToggle={
							() => {
								console.log('toggled requirement');
							}
						}
						openOptions={ false }
						openRequirement={ true }
						options={
							[
								{ label: 'Foo', value: 'foo' },
								{ label: 'Bar', value: 'bar' },
								{ label: 'Baz', value: 'baz' }
							]
						} />
				</Three>

				<Twelve>
					<p>HighlightTag.jsx</p>

					<HighlightTag
						label={ 'Tag Name' }
						onClose={
							() => {
								console.log('close highlight tag');
							}
						} />
				</Twelve>
			</Container>
		);
	}
}

export default Forms;