

const TodoDate = (props) => {
  const month = props.date.toLocaleString('en-US', {month : 'long'});
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const year = props.date.getFullYear();


  return (
      <p>Due Date : {month}월  {day}일 {year}년 </p>
  )
}


export default TodoDate