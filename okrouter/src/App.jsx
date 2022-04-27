import './App.css'
import Comp from './components/Comp.jsx'

function App(props) {
  const list = ['hello', 'helloo', 'hellooo'];
  return (
    <div className="App">
      <h1>Main</h1>
      {
        list.map(item => (
          <Comp value={item} />
         ))
      }
    </div>
  )
}

export default App

