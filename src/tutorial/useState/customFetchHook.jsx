import { useEffect, useState } from "react";
import "../styles/fetch.css";

const useFetchHook = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) setIsError(true);
      const user = await response.json();
      console.log(user);
      setUser(user);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return [isLoading, isError, user];
};

const CustomFetchHook = () => {
  const url = "https://api.github.com/users/QuincyLarson";
  const [isLoading, isError, user] = useFetchHook(url);
  if (isLoading) {
    // setUser("San");
    return <h1>Loading...</h1>;
  } else if (isError) return <h1>Oops couldn't connect at the moment... </h1>;
  const { name, avatar_url, company, bio } = user;
  return (
    <div>
      <h2>{name}</h2>
      <img
        src={avatar_url}
        style={{ width: "150px", borderRadius: "2rem" }}
        alt={name}
      />
      <h3>Works at {company}</h3>
      <p>{bio}</p>
    </div>
  );
};
export default CustomFetchHook;
