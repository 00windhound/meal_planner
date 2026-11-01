import Header from './NewHeader.jsx'
import ChartWindow from './ChartWindow.jsx'
import Log from './Log.jsx'
import './App.css'


function App() {
  return(
  <>
  <Header/>
    <div className="dashboard">
      <ChartWindow/>
      <Log/>
    </div>
  </>
  )
}

export default App