/* global document, React, ReactDOM */

import 'sass/ui.scss';
import PrimaryButton from 'components/base/PrimaryButton.jsx';

ReactDOM.render(<PrimaryButton active>Primary</PrimaryButton>, document.getElementById('primary-active-button'));
ReactDOM.render(<PrimaryButton>Primary</PrimaryButton>, document.getElementById('primary-button'));
ReactDOM.render(<PrimaryButton data-foo='foo'>Primary</PrimaryButton>, document.getElementById('primary-button-data-foo'));