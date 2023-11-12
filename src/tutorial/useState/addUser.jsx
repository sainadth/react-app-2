import { useState } from "react";
import "../styles/form.css";

const data = [
  { id: 1, name: "John" },
  { id: 2, name: "Peter" },
  { id: 3, name: "Susan" },
  { id: 4, name: "Anna" },
];

const AddUser = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    let newUserList = [...users];
    console.log(newUserList);
    newUserList[users.length] = {
      id: users.length + 1,
      name: name,
    };
    console.log(newUserList);
    setUsers(newUserList);
  };

  const handleRemove = (e) => {
    const updatedUsers = users.filter((person) => {
      return person.id !== e;
    });
    setUsers(updatedUsers);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <button>Submit</button>
      </form>
      <div>
        <h2>Users</h2>
        {users.map((ele) => {
          return (
            <div key={ele.id}>
              <div>{ele.name}</div>
              <button onClick={() => handleRemove(ele.id)}>Remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AddUser;
