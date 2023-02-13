import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Wrapper>
      <h1>Sidebar</h1>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: block;
  box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
  .sidebar-container {
    background: var(--white);
    min-height: 100vh;
    height: 100%;
    width: 250px;
    margin-left: -250px;
    transition: var(--transition);
  }
  .content {
    position: sticky;
    top: 0;
  }
  .show-sidebar {
    margin-left: 0;
  }
  header {
    height: 96px;
    display: flex;
    align-items: center;
    padding-left: 40px;
  }
  .nav-links {
    padding-top: 32px;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-500);
    padding: 16px 0;
    padding-left: 40px;
    text-transform: capitalize;
  }
  .nav-link:hover {
    background: var(--grey-50);
    padding-left: 48px;
    color: var(--grey-900);
  }
  .nav-link:hover .icon {
    color: var(--primary-500);
  }
  .icon {
    font-size: 24px;
    margin-right: 16px;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .active {
    color: var(--grey-900);
  }
  .active .icon {
    color: var(--primary-500);
  }
`;

export default Sidebar;
