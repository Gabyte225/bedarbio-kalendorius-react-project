import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Form from "../components/Form";
import Alert from "../components/Alert";
import { useAppContext } from "../context/appContext";

const loginState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(loginState);

  const { user, isLoading, showAlert, displayAlert, setupUser } =
    useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login Successful!",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "User Created!",
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  const member = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <nav>
          <Logo />
        </nav>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <Form
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            lableText="Name"
          />
        )}
        <Form
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          lableText="Email"
        />
        <Form
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          lableText="Password"
        />
        <button type="submit" className="btn btn-primar" disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={member} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  .form {
    background: var(--white);
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 50px 30px;
    border-top: 2px solid var(--primary-800);
    border-radius: var(--borderRadius);
    nav {
      margin-bottom: 30px;
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
    .form-components {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    button {
      margin-top: 20px;
    }
  }
`;

export default Register;
