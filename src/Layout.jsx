import { Outlet } from "react-router-dom"
import Nav from "./Components/homePages/Nav"
import Footer from "./Components/homePages/Footer"
import OfferBar from "./Components/homePages/OfferBar"

function Layout(){
    return(

        <>
        <OfferBar></OfferBar>
        <Nav></Nav>
        <Outlet>

        </Outlet>
        <Footer></Footer>
        </>
    )
}
export default Layout