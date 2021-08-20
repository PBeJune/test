import React, { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    let formData = {};
    formData.fullName = fullName;
    formData.email = email;
    formData.passowrd = password;
    console.log(formData);
  };

  return (
    <form>
      <input id="fullName" name="fullName" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <br />
      <input name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={(e) => onSubmit(e)}>Submit</button>
    </form>
  );
};

export default Form;
