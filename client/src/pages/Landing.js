import React from "react";
import Logo from "../components/Logo";
import main from "../assets/images/job-wanted.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Darbo paieškų sekimo aplikacija</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            quod optio quisquam omnis facilis reprehenderit expedita nemo quidem
            harum perferendis, maxime dolore sint nihil corporis, autem ratione
            id nesciunt consectetur vitae illo et aliquam nam necessitatibus.
            Doloribus quae, voluptatum aperiam eum maxime dolorem at expedita,
            harum recusandae fugit impedit atque!
          </p>
          <Link to="/register" className="btn btn-primar">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="bedarbio kalendorius" className="main" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: 100vw;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-top: 30px;
    div {
      display: flex;
      align-items: center;
      gap: 20px;
      img {
        width: 60px;
        height: 60px;
        border: 3px double var(--primary-800);
        border-radius: 50px;
      }
      div {
        font-size: 20px;
      }
    }
  }
  .page {
    display: flex;
    align-items: center;
  }
  h1 {
    font-weight: 700;
  }
  p {
    color: var(--grey-600);
  }
`;

export default Landing;
