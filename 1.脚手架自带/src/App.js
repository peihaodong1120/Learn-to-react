import './style/App.css';

function App() {
  const data = ['react', 'vue', 'aginl']
    
  return (
    <div className="App">
      <h1>hello, react</h1>
      <ul>
        {
          data.map((item, index) =>{
            return <li className='li-dom' key={index} >{item}</li>
          })
        }
      </ul>      
    </div>
  );
}

export default App;
