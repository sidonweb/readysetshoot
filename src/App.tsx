import './App.css'
import TargetCursor from './components/ui/TargetCursor'
import Landing from './pages/Landing'

const App = () => {

  return (
    <>
     <TargetCursor 
        spinDuration={10}
        hideDefaultCursor={true}
      />
      <Landing />
    </>
  )
}

export default App
