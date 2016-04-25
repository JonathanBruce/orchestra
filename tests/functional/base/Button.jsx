/* global document, React, ReactDOM */

import 'sass/test-ui.scss';
import BaseButton from 'components/base/Button.jsx';

ReactDOM.render(<BaseButton>Base</BaseButton>, document.getElementById('base-button'));
ReactDOM.render(<BaseButton data-foo='foo'>Base</BaseButton>, document.getElementById('base-button-data-foo'));