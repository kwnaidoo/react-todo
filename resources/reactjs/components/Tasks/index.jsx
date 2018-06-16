import React from 'react'
import TaskItemsComponent from './taskItems';

class TasksLayoutComponent extends React.Component{
   constructor(props){
		 super(props);
		this.state = {
			tasks: []
		};
		var route = document.location.href.split("#")[1];
		var tasks = [];
		if (route) {
			fetch('/api/v1/tasks/' + route)
			.then( tasks => tasks.json())
			.then(tasks => {
					var state = Object.assign({}, this.state);
					state.tasks = tasks.data;
					this.setState(state);
			})
		}
	 }
	 componentWillReceiveProps(nextProps){
		 var route = document.location.href.split("#")[1];
		 var tasks = [];
		 if (route) {
			 fetch('/api/v1/tasks/' + route)
			 .then( tasks => tasks.json())
			 .then(tasks => {
					var state = Object.assign({}, this.state);
					state.tasks = tasks.data;
					this.setState(state);
			 })
		 }
   }
	render(){
		var tasks = [];
		return (
			<div>
				<form>
					 <label>Task:</label>
						<input type="text" name="task" />
					 <input type="submit" value="ADD" />
				</form>
				<TaskItemsComponent tasks={this.state.tasks} />
			</div>
		);
	}
}


export default TasksLayoutComponent;
