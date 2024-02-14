import Header from "../Header"
import Footer from "../Footer"
import { Outlet } from 'react-router-dom'

const Layout = () => (
  <>
    <div className="container max-w-5xl my-0 mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  </>
);

export default Layout