import TodoItem from "./TodoItem"

const Todos = (props) => {

  return (
    <div>
    <TodoItem title={props.items[0].title} priority={props.items[0].priority} date={props.items[0].date}></TodoItem>
    <TodoItem title={props.items[1].title} priority={props.items[1].priority} date={props.items[1].date}></TodoItem>
    <TodoItem title={props.items[2].title} priority={props.items[2].priority} date={props.items[2].date}></TodoItem>
    <TodoItem title={props.items[3].title} priority={props.items[3].priority} date={props.items[3].date}></TodoItem>
    </div>

  )
}

export default Todos;