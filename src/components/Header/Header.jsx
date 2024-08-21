import Settings from "../Icons/Settings";
import Help from "../Icons/Help";
import './header.scss';

const Header = () => {
    return <div className="header">
        <img src="/Logo.png" alt="logo" width={141} height={34}/>
        <div className="settings">
            <Help />
            <Settings />
        </div>
    </div>
}

export default Header;