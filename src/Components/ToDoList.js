import React, {  Component } from 'react';
import { connect } from 'react-redux';
import { Badge, Button, Table } from 'react-bootstrap';
import { TodoActions } from '../action';


class ToDoList extends Component {
    constructor(props){
        super(props);
    }

    changeStaus = (idx)=>{
        let list = JSON.parse(JSON.stringify(this.props.todoList))
        
        list[idx]['completed'] = !list[idx].completed;
        this.props.todoStatusChange(list)
      }

      deleteItem = (idx)=>{
        let list = JSON.parse(JSON.stringify(this.props.todoList))
        list.splice(idx,1);
        this.props.todoDeleteItem(list)
      }

    render() {
        const {todoList} = this.props
        return (
            <div>
            <Table responsive striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>UserId</th>
                        <th>ToDo</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {todoList && todoList.length > 0 && todoList.map((item, idx)=>{
                        return(
                            <tr key={idx} style={{cursor: 'pointer'}}>
                                <td onClick={()=>this. changeStaus(idx)} >{item.id}</td>
                                <td onClick={()=>this. changeStaus(idx)} style={{ textDecoration: item.completed ? 'line-through' : 'none'}}>{item.userId}</td>
                                <td onClick={()=>this. changeStaus(idx)} style={{ textDecoration: item.completed ? 'line-through' : 'none'}}>{item.todo}</td>
                                <td onClick={()=>this. changeStaus(idx)} >
                                    { item.completed ? 
                                        <h5><Badge bg="warning" >Mark as Pending</Badge></h5>
                                        :
                                        <h5><Badge bg="success" >Mark as Complete</Badge></h5>
                                    }
                                </td>
                                <td>
                                    <Button variant="danger" onClick={()=>this.deleteItem(idx)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
        );
    }
}

function mapStateToProps(state) {
    const { todoList } = state
    return {
        todoList 
    };
}

const mapDispatchToProps = dispatch => {
    return {
        todoItemsList: (items) => dispatch(TodoActions.setTodoList(items)),
        todoStatusChange: (items) => dispatch(TodoActions.setTodoStatus(items)),
        todoDeleteItem: (items) => dispatch(TodoActions.deleteTodoItem(items)),
    }
  }

export default connect(
    mapStateToProps,mapDispatchToProps
)(ToDoList);