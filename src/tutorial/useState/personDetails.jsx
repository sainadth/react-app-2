import { useState } from "react";

import "../styles/personDetails.css";

const PersonDetails = () => {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(29);
  const [hobbies, setHobbies] = useState("Reading Books");
  const showSan = () => {
    /* 
      setName("San");
      setAge(24);
      setHobbies("Screaming at computer");
      console.log(...name);
     */
    /* OR */
    /* setPerson({
      name: "San",
      age: 24,
      hobbies: "Screaming at computer",
    }); */
    /* const san = {
      name: "san",
    };
    console.log(san);
    console.log({ ...san, age: 13 });
    console.log(person); */

    setPerson({
      name: "san",
      age: 24,
      hobbies: "Screaming at computer",
    });
    console.log(person);
  };

  const [person, setPerson] = useState({
    name: "John",
    age: 29,
    hobbies: "Reading Books",
  });

  return (
    <>
      <h3 className="details">{person.name}</h3>
      <h4 className="details">{person.age}</h4>
      <h4 className="details">{person.hobbies}</h4>
      <button className="btn" onClick={showSan}>
        Show San
      </button>
    </>
  );
};

export default PersonDetails;
