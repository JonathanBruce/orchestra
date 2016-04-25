/* global document, React, ReactDOM */

import 'sass/test-ui.scss';
import PrimaryButton from 'components/buttons/Primary.jsx';

ReactDOM.render(<PrimaryButton className='fuck'>Primary</PrimaryButton>, document.getElementById('primary-button'));