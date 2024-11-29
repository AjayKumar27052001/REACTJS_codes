import { useState } from "react";
import React from "react";
const useForm = (intialValues, validate) => {
  const [values, setValues] = useState(intialValues);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    const validationError = validate({ [name]: value });
    setErrors({ ...errors, ...validationError });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(errors).length === 0)
      console.log("form submitted sucessfully");
    else console.log("form not submitted");
  };
  return { errors, values, handleChange, handleSubmit };
};
const Formsubmit2 = () => {
  const intialValues = { username: "", email: "" };
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "username shouldnt be empty";
    }
    if (!values.email) {
      errors.email = "email shouldnt be empty";
    } else if (!/\S+@\S+\.\S+/.test(values.email))
      errors.email = "email should be valid";

    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    intialValues,
    validate
  );
  return (
    <div>
      <h1>form2</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          name="username"
          value={values.username}
          onChange={handleChange}
        ></input>
        {errors.username && <div>{errors.username}</div>}

        <label>Email</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
        ></input>
        {errors.email && <div>{errors.email}</div>}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Formsubmit2;
