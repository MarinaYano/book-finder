import Header from "../Header"
import Footer from "../Footer"
import { Outlet } from 'react-router-dom'

const Layout = () => (
  <>
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  </>
);

export default Layout