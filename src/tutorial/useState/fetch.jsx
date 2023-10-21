import { useEffect, useState } from "react";

import "../styles/fetch.css";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        console.log(users);
        setData(users);
      } catch (error) {
        console.log(error);
      }
    };
    console.log("github users rendered");
    fetchData();
  }, []);
  return (
    <section>
      <h2>Github Users</h2>
      <ul>
        {data.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li className="gitHubUser" key={id}>
              <img src={avatar_url} className="profile-pic" alt="" />
              <div className="details">
                <div>{login}</div>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FetchData;
