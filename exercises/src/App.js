import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Atualizar Linkedin',  'Curso de Finanças', 'Fluency Academy', 'Atualizar planilha de gastos', 'Academia'];
const tagsLi = tasks.map((task)=> Task(task));

function App() {
  return (
    <ol>
      {tagsLi}
    </ol>
  );
}

export default App;
