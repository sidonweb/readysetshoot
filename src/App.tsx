import './App.css'
import TargetCursor from './components/ui/TargetCursor'
import Landing from './pages/Landing'

const App = () => {

  return (
    <>
    <div className='hidden md:block'>
     <TargetCursor 
        spinDuration={10}
        hideDefaultCursor={true}
      />
      </div>
      <Landing />
    </>
  )
}

export default App
