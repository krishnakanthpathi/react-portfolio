
import './App.css'
import SideNav from './components/Navbars/SideNav'
import TopNav from './components/Navbars/TopNav'
import Hero from './components/Hero'
import BottomNav from './components/Navbars/BottomNav'
import LiquidChrome from './components/LiquidChrome';
import Iridescence from './components/Iridescence';
import LightRays from './components/LightRays';

import Galaxy from './components/Galaxy';

function App() {
  

  return (
    <>  
      <div className="fixed top-0 left-0 w-full h-full">
        
        <LiquidChrome />
        {/* <Iridescence /> */}
        {/* <LightRays /> */}
        {/* <Galaxy /> */}
      </div>

      <TopNav />
      <SideNav />
      <Hero />
        
    </>
  )
}

export default App
