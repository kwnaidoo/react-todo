import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import TasksLayoutComponent from './components/Tasks'

class AppComponent extends React.Component {
	render(){

		return (
			<BrowserRouter>
		       <Route path="/" render={() => <TasksLayoutComponent /> } />
		 </BrowserRouter>
		)
	}
}

ReactDOM.render(<AppComponent />, document.getElementById('app'));
