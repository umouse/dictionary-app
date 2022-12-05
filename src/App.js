
import './App.css';
import Dictonary from './Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Name'>
          <h1> Ulala's Dictionary </h1>
        </div>
      </header>
      <main>
       <Dictonary />
      </main>
      <footer className="App-footer mt-5"><small>Coded by<a href='https://www.linkedin.com/in/yuliia--ishchenko/'> Yuliia Ishchenko</a> for <a href="https://www.shecodes.io/workshops">SheCodes React</a> workshop</small></footer>
    </div>
  );
}

export default App;
