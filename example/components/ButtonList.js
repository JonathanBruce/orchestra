/* eslint-disable no-console */
/* global React */

import {
	BrandButton,
	Container,
	FemaleButton,
	Four,
	FullPrimaryButton,
	FullSecondaryButton,
	FullTertiaryButton,
	Icons,
	MaleButton,
	MarketingFullPrimaryButton,
	MarketingFullSecondaryButton,
	MarketingPartialPrimaryButton,
	PartialPrimaryButton,
	PartialSecondaryButton,
	PartialTertiaryButton,
	PrimaryNegativeButton,
	PrimaryNeutralButton,
	PrimaryPositiveButton,
	SecondaryNeutralButton,
	SecondaryPositiveButton,
	TertiaryNegativeButton,
	TertiaryNeutralButton,
	TertiaryPositiveButton,
	Three,
	Twelve,
	Two
} from '../../src/ui';

class ButtonList extends React.Component {
	render() {
		return (
			<Container>
				<Twelve>
					<a id='buttons'/>
					<h2>Buttons</h2>
				</Twelve>

				<Two>
					<p>Brand.jsx disabled</p>
					<BrandButton />
				</Two>

				<Two>
					<p>Brand.jsx</p>
					<BrandButton active />
				</Two>

				<Two>
					<p>Female.jsx disabled</p>
					<FemaleButton />
				</Two>

				<Two>
					<p>Female.jsx</p>
					<FemaleButton active />
				</Two>

				<Two>
					<p>Male.jsx disabled</p>
					<MaleButton />
				</Two>

				<Two>
					<p>Male.jsx</p>
					<MaleButton active />
				</Two>

				<Two>
					<p>FullPrimary.jsx</p>
					<FullPrimaryButton>Full Primary</FullPrimaryButton>
				</Two>

				<Two>
					<p>FullSecondary.jsx</p>
					<FullSecondaryButton>Full Secondary</FullSecondaryButton>
				</Two>

				<Two>
					<p>FullTertiary.jsx</p>
					<FullTertiaryButton>Full Tertiary</FullTertiaryButton>
				</Two>

				<Three>
					<p>SecondaryNeutral.jsx</p>
					<SecondaryNeutralButton icon={ <Icons.Links /> } >Secondary Neutral</SecondaryNeutralButton>
				</Three>

				<Three>
					<p>SecondaryPositive.jsx</p>
					<SecondaryPositiveButton icon={ <Icons.Links /> } >Secondary Positive</SecondaryPositiveButton>
				</Three>

				<Three>
					<p>PrimaryNegative.jsx</p>
					<PrimaryNegativeButton>Primary Negative</PrimaryNegativeButton>
				</Three>

				<Three>
					<p>PrimaryNeutral.jsx</p>
					<PrimaryNeutralButton>Primary Neutral</PrimaryNeutralButton>
				</Three>

				<Three>
					<p>PrimaryPositive.jsx</p>
					<PrimaryPositiveButton>Primary Positive</PrimaryPositiveButton>
				</Three>

				<Three>
					<p>PrimaryPositive.jsx</p>
					<PrimaryPositiveButton disabled>Primary Positive</PrimaryPositiveButton>
				</Three>

				<Two>
					<p>PartialPrimary.jsx</p>
					<PartialPrimaryButton><Icons.Links /></PartialPrimaryButton>
				</Two>

				<Two>
					<p>PartialSecondary.jsx</p>
					<PartialSecondaryButton><Icons.Links /></PartialSecondaryButton>
				</Two>

				<Two>
					<p>PartialTertiary.jsx</p>
					<PartialTertiaryButton><Icons.Links /></PartialTertiaryButton>
				</Two>

				<Two>
					<p>TertiaryNegative.jsx</p>
					<TertiaryNegativeButton><Icons.GoBack /></TertiaryNegativeButton>
				</Two>

				<Two>
					<p>TertiaryNeutral.jsx</p>
					<TertiaryNeutralButton><Icons.GoBack /></TertiaryNeutralButton>
				</Two>

				<Two>
					<p>TertiaryPositive.jsx</p>
					<TertiaryPositiveButton><Icons.GoBack /></TertiaryPositiveButton>
				</Two>

				<Two>
					<p>TertiaryPositive.jsx</p>
					<TertiaryPositiveButton disabled><Icons.GoBack /></TertiaryPositiveButton>
				</Two>

				<Four>
					<p>MarketingFullPrimary.jsx</p>
					<MarketingFullPrimaryButton>Marketing Primary</MarketingFullPrimaryButton>
				</Four>

				<Four>
					<p>MarketingFullSecondary.jsx</p>
					<MarketingFullSecondaryButton>Marketing Secondary</MarketingFullSecondaryButton>
				</Four>

				<Two>
					<p>MarketingPartialPrimary.jsx</p>
					<MarketingPartialPrimaryButton>MKT Part.</MarketingPartialPrimaryButton>
				</Two>
			</Container>
		);
	}
}

export default ButtonList;