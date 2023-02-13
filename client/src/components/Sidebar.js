import React from "react";
import NavLinks from "./NavLinks";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Wrapper>
      <NavLinks />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: block;
  box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
  .nav-links {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    width: 100%;
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
