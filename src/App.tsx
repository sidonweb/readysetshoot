import { useEffect, useRef } from 'react';
import './App.css'
import TargetCursor from './components/ui/TargetCursor'
import Landing from './pages/Landing'

import Lenis from "@studio-freight/lenis";

const App = () => {
const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis and assign to current
    lenisRef.current = new Lenis({
      lerp: 0.1,
      // @ts-ignore
      smooth: true,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time); // safe call with optional chaining
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);


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
