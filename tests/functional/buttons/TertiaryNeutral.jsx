/* global document, React, ReactDOM */

import 'sass/test-ui.scss';
import GoBack from 'icons/GoBack.jsx';
import TertiaryNeutralButton from 'components/buttons/TertiaryNeutral.jsx';

ReactDOM.render(<TertiaryNeutralButton><GoBack /></TertiaryNeutralButton>, document.getElementById('tertiary-neutral-button'));