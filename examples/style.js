/* global document, React, ReactDOM */

import 'sass/ui.scss';
import BrandButton from 'components/buttons/Brand.jsx';
import FemaleButton from 'components/buttons/Female.jsx';
import MaleButton from 'components/buttons/Male.jsx';
import PrimaryButton from 'components/base/PrimaryButton.jsx';
import PrimaryNeutralButton from 'components/buttons/PrimaryNeutral.jsx';
import PrimaryPositiveButton from 'components/buttons/PrimaryPositive.jsx';
import SecondaryButton from 'components/base/SecondaryButton.jsx';
import SecondaryPositiveButton from 'components/buttons/SecondaryPositive.jsx';

ReactDOM.render(<BrandButton>Primary Button</BrandButton>, document.getElementById('brand-button'));
ReactDOM.render(<FemaleButton>Primary Button</FemaleButton>, document.getElementById('female-button'));
ReactDOM.render(<MaleButton>Primary Button</MaleButton>, document.getElementById('male-button'));
ReactDOM.render(<PrimaryButton>Primary Button</PrimaryButton>, document.getElementById('primary-button'));
ReactDOM.render(<PrimaryButton disabled>Primary Disabled Button</PrimaryButton>, document.getElementById('primary-disabled-button'));
ReactDOM.render(<PrimaryNeutralButton>Primary Neutral Button</PrimaryNeutralButton>, document.getElementById('primary-neutral-button'));
ReactDOM.render(<PrimaryNeutralButton disabled>Primary Neutral Disabled Button</PrimaryNeutralButton>, document.getElementById('primary-neutral-disabled-button'));
ReactDOM.render(<PrimaryPositiveButton>Primary Positive Button</PrimaryPositiveButton>, document.getElementById('primary-positive-button'));
ReactDOM.render(<PrimaryPositiveButton disabled>Primary Positive Disabled Button</PrimaryPositiveButton>, document.getElementById('primary-positive-disabled-button'));
ReactDOM.render(<SecondaryButton>Secondary Button</SecondaryButton>, document.getElementById('secondary-button'));
ReactDOM.render(<SecondaryPositiveButton>Secondary Positive Button</SecondaryPositiveButton>, document.getElementById('secondary-positive-button'));