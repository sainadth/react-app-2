import { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("San");
  const [user, setUser] = useState({ name: "John" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {text || (
        <div>
          <h2>Text return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <UserComponent name={user.name} />}
    </div>
  );
};

const UserComponent = ({ name }) => {
  return (
    <div>
      <h2>user name {name}</h2>
    </div>
  );
};

export default ShortCircuit;
