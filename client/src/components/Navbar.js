import { useState } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import styled from "styled-components";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useAppContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="logo">
          <Logo />
        </div>
        <div className="btn-container">
          <button className="btn" onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button onClick={logoutUser} className="dropdown-btn">
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  .logo {
    div {
      display: flex;
      align-items: center;
      gap: 10px;
      img {
        width: 60px;
        height: 60px;
        margin: 10px 10px 10px 50px;
        border: 3px double var(--primary-800);
        border-radius: 50px;
      }
      div {
        font-size: 20px;
      }
    }
  }
  .nav-center {
    display: flex;
    width: 85vw;
    align-items: center;
    justify-content: space-between;
  }
  background: var(--white);
  .btn-container {
    margin: 10px 50px 10px 10px;
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 8px;
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    padding: 8px;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
    box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.3);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    cursor: pointer;
  }
`;

export default Navbar;
