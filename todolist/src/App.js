import './App.css';
import Todos from './components/Todo/Todos'

function App() {
  const todos = [
    {id: 'e1', title : '정보처리기사 필기', priority: 1, date: new Date(2021, 9, 1) },
    {id: 'e2', title : '정보처리기사 실기', priority: 2, date: new Date(2021, 9, 5) },
    {id: 'e3', title : '토익', priority: 3, date: new Date(2021, 9, 22) },
    {id: 'e4', title : 'AWS 자격증', priority: 4, date: new Date(2021, 9, 4) },
  ]


  return (
    <div className="App">
      <header className="App-header">
        <p>TodoList</p>
        <Todos items={todos}></Todos>
      </header>
    </div>
  );
}

export default App;
