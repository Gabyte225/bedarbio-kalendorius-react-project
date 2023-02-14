import React from "react";
import { useState } from "react";
import FormRow from "../../components/Form.js";
import Alert from "../../components/Alert.js";
import { useAppContext } from "../../context/appContext.js";
import styled from "styled-components";

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      displayAlert();
      return;
    }
    updateUser({ name, email, lastName, location });
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile </h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            lableText="Name"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            lableText="Last Name"
            type="text"
            name="lastName"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            type="email"
            lableText="Email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type="text"
            lableText="Location"
            name="location"
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 48px 32px 64px;
  .form {
    width: 100%;
  }
  .form-center {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 8px;
    column-gap: 20px;
    .form-components {
      display: flex;
      flex-direction: column;
      .form-input {
        height: 35px;
      }
    }
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 0;
  }
`;

export default Profile;
