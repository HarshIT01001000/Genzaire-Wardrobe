import { Outlet } from "react-router-dom"
import Footer from "./Components/homePages/Footer"
import OfferBar from "./Components/homePages/OfferBar"
import Nav from "./Components/homePages/Nav"

function Layout(){
    return(

        <>
        <OfferBar></OfferBar>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}
export default Layout