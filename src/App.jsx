import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Biodata from './components/Biodata'
import Contact from './components/Contact'
import Background from './components/Background'
import Home from './components/Home'

import { Route, Routes } from "react-router-dom" 

function App() {
  return (

    <div>
      {/* <Background /> */}
      <Routes>
        <Route path="/background" element={<Background />} />
        <Route path="/" element={<Home />} />
      </Routes>
        {/* <Main />
        <Biodata />
        <Contact /> */}
        {/* <Background /> */}
    </div>

  )
}

export default App
