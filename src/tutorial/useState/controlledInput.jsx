import { useState } from "react";
import "../styles/form.css";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label htmlFor="">Name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div className="form-row">
        <label htmlFor="">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default ControlledInputs;
