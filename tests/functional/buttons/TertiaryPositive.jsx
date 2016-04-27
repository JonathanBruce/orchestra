/* global document, React, ReactDOM */

import 'sass/test-ui.scss';
import GoBack from 'icons/GoBack.jsx';
import TertiaryPositiveButton from 'components/buttons/TertiaryPositive.jsx';

ReactDOM.render(<TertiaryPositiveButton><GoBack /></TertiaryPositiveButton>, document.getElementById('tertiary-positive-button'));