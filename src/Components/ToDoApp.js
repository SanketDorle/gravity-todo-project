import { Container, Row, Col } from 'react-bootstrap';
import ToDoAdd from './ToDoAdd';
import ToDoList from './ToDoList';
import ToDoFilter from './ToDoFilter';
import useFetch from './FetchHook';
import { useDispatch } from 'react-redux';
import { TodoActions } from '../action';

function ToDoApp() {
  const dispatch = useDispatch()
  const items = JSON.parse(localStorage.getItem('todoList'));
  if (items && items.length > 0) {
    console.log("localstorage is here");

    dispatch(TodoActions.setTodoList(items));
  } else {
    console.log("Call API");
    useFetch({ url: 'https://dummyjson.com/todos', payload: null })
  }
  return (
    <Container style={{ marginTop: '2%' }}>

      <Row style={{ marginBottom: '2%' }}>
        <Col sm={12} md={6} lg={8}>
          <ToDoFilter />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <ToDoAdd />
        </Col>
      </Row>

      <ToDoList />
    </Container>
  );
}

export default ToDoApp;
