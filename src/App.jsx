import Header from './NewHeader.jsx'
import ChartWindow from './ChartWindow.jsx'
import Log from './Log.jsx'
import PlannedMeals from './PlannedMeals.jsx'
import './App.css'


function App() {
  return(
  <>
    <Header/>
    <div className="dashboard">
      <ChartWindow/>
      <div>
        <Log/>
        <PlannedMeals/>
      </div>
    </div>
  </>
  )
}

export default App