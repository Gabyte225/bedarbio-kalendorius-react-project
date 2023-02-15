import FormRow from "../../components/Form.js";
import Alert from "../../components/Alert.js";
import FormSelect from "../../components/FormSelect.js";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";

const AddJob = () => {
  const {
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    createJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    createJob();
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>Add Job</h3>
        {showAlert && <Alert />}

        <div className="form-center">
          <FormRow
            type="text"
            lableText="Position"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            lableText="Company"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            lableText="Job Location"
            labelText="location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          <FormSelect
            name="status"
            labelText="Status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          <FormSelect
            labelText="Job Type"
            name="jobType"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          <div className="btn-container">
            <button
              className="btn btn-block"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
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
    .form-row {
      display: flex;
      flex-direction: column;
      width: 100%;
      .form-select {
        height: 35px;
      }
    }
    .btn-container {
      display: flex;
      .btn-block {
        align-self: end;
        width: 100%;
        height: 35px;
        margin-top: 0;
      }
    }
  }
`;

export default AddJob;
