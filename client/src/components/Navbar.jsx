import Wrapper from "../assets/wrappers/Navbar"
import { FaAlignLeft } from 'react-icons/fa';
import Logo from "./Logo";
import { useDashboardContext } from "../pages/DashboardLayout";
import LogoutContainer from "./LogoutContainer";

const Navbar = () => {
  const {toggleSidebar} = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" type="button" onClick={toggleSidebar}>
          <FaAlignLeft/>
        </button>
        <div>
      </div>
      <Logo/>
      <h4 className="logo-text">Dashboard</h4>
      <div className="btn-container">
        <LogoutContainer/>
      </div>
        </div>
    </Wrapper>
  )
}

export default Navbar