import './App.css'
import Header from './components/Header'
import ClickSpark from './components/clickSparks/ClickSparks'
import SmoothScroll from './components/SmoothScroll'
import ContactPage from './pages/ContactPage'
import MainPage from './pages/MainPage'
import ServicesPage from './pages/ServicesPage'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <ClickSpark>
      <Header/>
      <SmoothScroll>
        <Routes>
          <Route path='/' element={<MainPage></MainPage>}></Route>
          <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
          <Route path='/services' element={<ServicesPage></ServicesPage>}></Route>
        </Routes>
      </SmoothScroll>
      </ClickSpark>
    </>
  )
}

export default App
