/* global document, React, ReactDOM */

import 'sass/ui.scss';
import BrandButton from 'components/buttons/Brand.jsx';
import FemaleButton from 'components/buttons/Female.jsx';
import MaleButton from 'components/buttons/Male.jsx';
import PrimaryButton from 'components/base/PrimaryButton.jsx';
import PrimaryNegativeButton from 'components/buttons/PrimaryNegative.jsx';
import PrimaryNeutralButton from 'components/buttons/PrimaryNeutral.jsx';
import PrimaryPositiveButton from 'components/buttons/PrimaryPositive.jsx';
import SecondaryButton from 'components/base/SecondaryButton.jsx';
import SecondaryNeutralButton from 'components/buttons/SecondaryNeutral.jsx';
import SecondaryPositiveButton from 'components/buttons/SecondaryPositive.jsx';
import TertiaryButton from 'components/base/TertiaryButton.jsx';
import TertiaryNegativeButton from 'components/buttons/TertiaryNegative.jsx';
import TertiaryNeutralButton from 'components/buttons/TertiaryNeutral.jsx';
import TertiaryPositiveButton from 'components/buttons/TertiaryPositive.jsx';

import GoBack from 'icons/GoBack.jsx';
import Links from 'icons/Links.jsx';
import Verified from 'icons/Verified.jsx';

ReactDOM.render(<BrandButton />, document.getElementById('brand-button'));
ReactDOM.render(<BrandButton active />, document.getElementById('brand-active-button'));

ReactDOM.render(<FemaleButton />, document.getElementById('female-button'));
ReactDOM.render(<FemaleButton active />, document.getElementById('female-active-button'));

ReactDOM.render(<MaleButton />, document.getElementById('male-button'));
ReactDOM.render(<MaleButton active />, document.getElementById('male-active-button'));

ReactDOM.render(<PrimaryButton>Primary Button</PrimaryButton>, document.getElementById('primary-button'));
ReactDOM.render(<PrimaryButton disabled>Primary Disabled Button</PrimaryButton>, document.getElementById('primary-disabled-button'));

ReactDOM.render(<PrimaryNegativeButton>Primary Negative Button</PrimaryNegativeButton>, document.getElementById('primary-negative-button'));
ReactDOM.render(<PrimaryNegativeButton disabled>Primary Negative Disabled Button</PrimaryNegativeButton>, document.getElementById('primary-negative-disabled-button'));

ReactDOM.render(<PrimaryNeutralButton>Primary Neutral Button</PrimaryNeutralButton>, document.getElementById('primary-neutral-button'));
ReactDOM.render(<PrimaryNeutralButton disabled>Primary Neutral Disabled Button</PrimaryNeutralButton>, document.getElementById('primary-neutral-disabled-button'));

ReactDOM.render(<PrimaryPositiveButton>Primary Positive Button</PrimaryPositiveButton>, document.getElementById('primary-positive-button'));
ReactDOM.render(<PrimaryPositiveButton disabled>Primary Positive Disabled Button</PrimaryPositiveButton>, document.getElementById('primary-positive-disabled-button'));

ReactDOM.render(<SecondaryButton>Secondary Button</SecondaryButton>, document.getElementById('secondary-button'));
ReactDOM.render(<SecondaryButton disabled>Secondary Button Disabled</SecondaryButton>, document.getElementById('secondary-disabled-button'));

ReactDOM.render(<SecondaryNeutralButton icon={ <Verified /> }>Secondary Neutral Button</SecondaryNeutralButton>, document.getElementById('secondary-neutral-button'));
ReactDOM.render(<SecondaryNeutralButton icon={ <Verified /> } disabled>Secondary Neutral Disabled Button</SecondaryNeutralButton>, document.getElementById('secondary-neutral-disabled-button'));

ReactDOM.render(<SecondaryPositiveButton icon={ <Links /> }>Secondary Positive Button</SecondaryPositiveButton>, document.getElementById('secondary-positive-button'));
ReactDOM.render(<SecondaryPositiveButton icon={ <Links /> } disabled>Secondary Positive Disabled Button</SecondaryPositiveButton>, document.getElementById('secondary-positive-disabled-button'));

ReactDOM.render(<TertiaryButton><GoBack /></TertiaryButton>, document.getElementById('tertiary-button'));
ReactDOM.render(<TertiaryButton disabled><GoBack /></TertiaryButton>, document.getElementById('tertiary-disabled-button'));

ReactDOM.render(<TertiaryNegativeButton><GoBack /></TertiaryNegativeButton>, document.getElementById('tertiary-negative-button'));
ReactDOM.render(<TertiaryNegativeButton disabled><GoBack /></TertiaryNegativeButton>, document.getElementById('tertiary-negative-disabled-button'));

ReactDOM.render(<TertiaryNeutralButton><GoBack /></TertiaryNeutralButton>, document.getElementById('tertiary-neutral-button'));
ReactDOM.render(<TertiaryNeutralButton disabled><GoBack /></TertiaryNeutralButton>, document.getElementById('tertiary-neutral-disabled-button'));

ReactDOM.render(<TertiaryPositiveButton><GoBack /></TertiaryPositiveButton>, document.getElementById('tertiary-positive-button'));
ReactDOM.render(<TertiaryPositiveButton disabled><GoBack /></TertiaryPositiveButton>, document.getElementById('tertiary-positive-disabled-button'));

