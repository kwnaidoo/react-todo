import React from 'react'

class TaskComponent extends React.Component {
    constructor(props) {
      super(props);
      var checked = '';
      if(props.task.status == 1){
          checked = 'checked';
      }
      this.state = {
        task: props.task,
        checked: checked,
        checkAll: props.checkAll
      };
      this.onChange = this.onChange.bind(this);

   }

   onChange(event){
      var state = Object.assign({}, this.state);
      if(event.target.checked == true){
        state.checked = 'checked';
      }else{
        state.checked = '';
      }

      this.setState(state);
   }

   componentWillUpdate(nextProps, nextState) {
       if (nextProps.checkAll != this.state.checkAll) {
           var state = Object.assign({}, this.state);
           state.checkAll = nextProps.checkAll;
           if (state.checkAll == true) {
             state.checked = 'checked';
           }else{
             state.checked = '';
           }
           this.setState(state);
       }
   }

    render() {
      var checked = '';
      if (this.state.status == 1) {
         checked = 'checked';
      }
      return (
      <li>
      <div className="custom-control custom-checkbox">
            <input type="checkbox" onChange={this.onChange} checked={this.state.checked} className="custom-control-input" />
            <label className="custom-control-label"> {this.state.task.name} </label>
        </div>
      </li>
    );
    }
}
export default TaskComponent;
