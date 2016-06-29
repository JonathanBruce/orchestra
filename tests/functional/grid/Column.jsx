/* global document, React, ReactDOM */

import 'sass/ui.scss';
import Column from 'components/grid/Column.jsx';
import Container from 'components/grid/Container.jsx';

class ColumnTest extends React.Component {
	render() {
		return (
			<div id='column'>
					<div className='alpha'>
						<Container>
							<Column size='12' alpha>Column</Column>
						</Container>
					</div>

					<div className='neutral'>
						<Container>
							<Column size='12'>Column</Column>
						</Container>
					</div>

					<div className='omega'>
						<Container>
							<Column size='12' omega>Column</Column>
						</Container>
					</div>
			</div>
		);
	}
}

ReactDOM.render(<ColumnTest />, document.getElementById('test'));