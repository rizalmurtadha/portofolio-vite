import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Biodata from './components/Biodata'
import Contact from './components/Contact'
import Background from './components/Background'
import Home from './components/Home'

import { Route, Routes } from "react-router-dom" 
import Pagination from './components/Pagination'
import 'react-tooltip/dist/react-tooltip.css'

function App() {
  return (

    <div>
      {/* <Background /> */}
      <Routes>
        <Route path="/background" element={<Background />} />
        <Route path="/" element={<Home />} />
        <Route path="/pagination" element={<Pagination />} />
      </Routes>
        {/* <Main />
        <Biodata />
        <Contact /> */}
        {/* <Background /> */}

        {/* <Pagination /> */}
    </div>

  )
}

export default App
