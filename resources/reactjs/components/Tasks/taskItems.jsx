import React from 'react';
import TaskComponent from '../Task';

class TaskItemsComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            tasks: [
                {'id':1, 'status': 'inactive', 'name' : 'dashcars'},
                {'id':2, 'status': 'checked', 'name': 'expand'}
            ],
            checkAll: false
      };

      this.onChange = this.onChange.bind(this);

   }
   onChange(event){
     var state = Object.assign({}, this.state);
     if (event.target.checked == true){
       state.checkAll = true;
     }else{
        state.checkAll = false;
     }
     alert(state.checkAll)
     this.setState(state);
   }

    render() {
      const items = this.state.tasks.map(
        task =><TaskComponent task={task} key={task.id} checkAll={this.state.checkAll} />
      );
      return (
        <div>
				<div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input"  onChange={this.onChange} />
            <label className="custom-control-label"> Mark all as done </label>
        </div>

        <ul>{items}</ul>
      </div>);
    }
}

export default TaskItemsComponent;
