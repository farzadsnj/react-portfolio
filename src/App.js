import React, {useEffect, useState} from 'react'
import useMediaQuary from './hooks/useMediaQuery'
import Navbar from './scenes/Navbar'

function App() {
  const [selectedPage, setSelectedPage] = useState('home')
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isAboveMediumScreens = useMediaQuary('(min-width: 1060px)')

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true)
      else setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
