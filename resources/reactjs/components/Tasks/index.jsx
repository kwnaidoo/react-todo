import React from 'react'
import TaskItemsComponent from './taskItems';

class TasksLayoutComponent extends React.Component{
   constructor(props){
		super(props);
    var taskList = document.location.href.split("#")[1];
    if (!taskList) {
      taskList = 'General';
    }
		this.state = {
			tasks: [],
      taskList: taskList
		};

		var tasks = [];
		fetch('/api/v1/tasks/' + taskList)
		    .then( tasks => tasks.json())
		    .then(tasks => {
				    var state = Object.assign({}, this.state);
				    state.tasks = tasks.data;
            console.log(state.tasks);
				    this.setState(state);
		    });
    this.saveTask = this.saveTask.bind(this);
	 }

   saveTask(e){
     e.preventDefault();
     $.ajax({
       url: '/api/v1/tasks/create',
       type: 'POST',
       data: {
            'status': 0,
            'taskListName': this.state.taskList,
            'task': $("#task").val(),
            '_token': $('meta[name="csrf-token"]').attr('content')
          },
       success: response => {
         alert(response)
       }
     });
   }

	 componentWillReceiveProps(nextProps){
		 var taskList = document.location.href.split("#")[1];
     if (!taskList) {
         taskList = 'General';
     }
		 var tasks = [];

		 fetch('/api/v1/tasks/' + taskList)
			 .then( tasks => tasks.json())
			 .then(tasks => {
					var state = Object.assign({}, this.state);
					state.tasks = tasks.data;
          state.taskList = taskList;
					this.setState(state);
		   });

   }
	render(){
		var tasks = [];
		return (
			<div>
				<form>
					 <label>Task:</label>
						<input type="text" name="task" id="task" />
					 <input type="submit" value="ADD" onClick={this.saveTask} />
				</form>
				<TaskItemsComponent tasks={this.state.tasks} />
			</div>
		);
	}
}


export default TasksLayoutComponent;
