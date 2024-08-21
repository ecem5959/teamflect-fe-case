import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import './layout.scss'

const Layout = ({children}) => {
    return <>
        <Header />
        <div className="main">
            <NavBar />
            {children}
        </div>
    </>
}

export default Layout;