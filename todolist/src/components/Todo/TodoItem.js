import "./TodoItem.css";
import TodoDate from "./TodoDate";
import Card from "../UI/Card";
const TodoItem = (props) => {




  return (
    <Card>
      <header>
        <p className="Todo__Title">{props.title}</p>
      </header>
      <div>
        <TodoDate date={props.date}></TodoDate>
        <p>우선순위 : {props.priority}</p>
        <button>우선순위 늘리기</button>
      </div>
    </Card>
  )
}

export default TodoItem;