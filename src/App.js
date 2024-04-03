import './App.css';

import Header from './Header.js';
import Subheader from './Subheader.js';
import Todo from './Todo.js';

function App() {
  return (
    <div className="mt-3 relative left-40 w-[64.1vh] h-[97vh] bg-blue-200 lg:w-[63vh] lg:left-[40rem] ">
      <Header/>
      <Subheader/>
      <Todo/>
    </div>
  );
}

export default App;
