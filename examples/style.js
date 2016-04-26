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
import Links from 'icons/Links.jsx';

ReactDOM.render(<BrandButton />, document.getElementById('brand-button'));
ReactDOM.render(<BrandButton active />, document.getElementById('brand-active-button'));
ReactDOM.render(<FemaleButton />, document.getElementById('female-button'));
ReactDOM.render(<FemaleButton active />, document.getElementById('female-active-button'));
ReactDOM.render(<MaleButton />, document.getElementById('male-button'));
ReactDOM.render(<MaleButton active />, document.getElementById('male-active-button'));
ReactDOM.render(<PrimaryButton>Primary Button</PrimaryButton>, document.getElementById('primary-button'));
ReactDOM.render(<PrimaryButton disabled>Primary Disabled Button</PrimaryButton>, document.getElementById('primary-disabled-button'));
ReactDOM.render(<PrimaryNeutralButton>Primary Neutral Button</PrimaryNeutralButton>, document.getElementById('primary-neutral-button'));
ReactDOM.render(<PrimaryNeutralButton disabled>Primary Neutral Disabled Button</PrimaryNeutralButton>, document.getElementById('primary-neutral-disabled-button'));
ReactDOM.render(<PrimaryPositiveButton>Primary Positive Button</PrimaryPositiveButton>, document.getElementById('primary-positive-button'));
ReactDOM.render(<PrimaryPositiveButton disabled>Primary Positive Disabled Button</PrimaryPositiveButton>, document.getElementById('primary-positive-disabled-button'));
ReactDOM.render(<SecondaryButton>Secondary Button</SecondaryButton>, document.getElementById('secondary-button'));
ReactDOM.render(<SecondaryPositiveButton icon={ <Links /> }>Secondary Positive Button</SecondaryPositiveButton>, document.getElementById('secondary-positive-button'));
ReactDOM.render(<SecondaryPositiveButton icon={ <Links /> } disabled>Secondary Positive Disabled Button</SecondaryPositiveButton>, document.getElementById('secondary-positive-disabled-button'));