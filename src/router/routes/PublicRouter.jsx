import { Outlet } from "react-router-dom"
import PublicAppBar from "../../components/PublicAppBar"
import Footer from "../../components/Footer"

const PublicRouter = () => {
    return (
        <>
            <PublicAppBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default PublicRouter