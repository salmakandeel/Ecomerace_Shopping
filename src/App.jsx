
import './App.css'
import { Outlet } from 'react-router-dom'
import NavItems from './components/NavItems'
import Footter from './components/Footter'

function App() {

  return (
    <>
    <NavItems/>
    <div className='min-vh-100'>
    <Outlet/>
    </div>
   
   <Footter/>
    </>
  )
}

export default App
