/* global document, React, ReactDOM */

import 'sass/test-ui.scss';
import GoBack from 'icons/GoBack.jsx';
import TertiaryNegativeButton from 'components/buttons/TertiaryNegative.jsx';

ReactDOM.render(<TertiaryNegativeButton><GoBack /></TertiaryNegativeButton>, document.getElementById('tertiary-negative-button'));