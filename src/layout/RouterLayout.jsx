import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const RouterLayout = () => {
  return (
    <>
    <header>
        <Navbar/>
    </header>
    <main>
        <Outlet />
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default RouterLayout
