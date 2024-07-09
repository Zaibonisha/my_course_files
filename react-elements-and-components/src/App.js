import logo from './logo.svg';
import './App.css';

function App() {
  let msg = 'awesome';
  return (
    <div >
      <h1 className= "myHeader">This is my header</h1>
      <p className="myParagraph">This is my first {msg} components</p>

    </div>
  );
}

export default App;
