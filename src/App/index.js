import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ErrorBoundary from '../unilts/ErrorBoundary';
import Nav from './components/Nav';
import Home from './Pages/Home/loadable';
import ReactHookForm from './Pages/ReactHookForm/loadable';
import Formilk from './Pages/Formilk/loadable'

const App = () => (
	<div className='app-wrap'>
		<BrowserRouter>
			<ErrorBoundary>
				<Nav />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/reacthookform' component={ReactHookForm} />
					<Route exact path='/formilk' component={Formilk} />
				</Switch>				
			</ErrorBoundary>
		</BrowserRouter>
	</div>
);

export default App;
