import React, { Component } from 'react';
import CheckBox from "./CheckBox";


class Todo extends Component {
 
    render() { 
        return ( 
            <div>

            <ul>

    {this.props.tasks.map(function(task,index){
            return(
                 <React.Fragment>
                         <CheckBox/>
                         
                              <li key={index} style={{listStyle:"none"}}>{task} <input type="button"  className="btn btn-danger" style={{borderRadius:50}} value="X" onClick={this.props.onHandleDelete} data-key={index}/></li>

                </React.Fragment>
            )



            },this)}


            </ul>

            </div>
        
        );
    }
}
 
export default Todo;