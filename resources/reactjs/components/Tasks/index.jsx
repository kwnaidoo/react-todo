import React from 'react'
import TaskItemsComponent from './taskItems';

class TasksLayoutComponent extends React.Component{
	render(){
		return (
			<div>
				<form>
					 <label>Task:</label>
						<input type="text" name="task" />
					 <input type="submit" value="ADD" />
				</form>
				<TaskItemsComponent />
			</div>
		);
	}
}


export default TasksLayoutComponent;
