import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/Navbar.js";
import Sidebar from "../../components/Sidebar.js";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <Sidebar className="Sidebar" />
        <div className="navbar">
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .dashboard-page {
    width: 90%;
    margin: 0 auto;
    padding: 32px 0;
  }
`;

export default SharedLayout;
