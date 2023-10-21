import { useEffect, useState } from "react";

/**
 * useEffect will be triggered when the component is rendered at the first time
 * but when we conditionally return react components if one of the component contain
 * useEffect every time the component renders the useEffect will de triggered which
 * is not usual
 */

const RandomComponent = () => {
  useEffect(() => {
    console.log("RandomComponent re rendered");
  }, []);
  return <div>Hello there</div>;
};

const CleanUp = () => {
  const [toggle, setToggle] = useState();
  return (
    <div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle Component
      </button>
      {toggle ? <div>Hello</div> : <div>Bye</div>}
      {toggle && <RandomComponent />}
    </div>
  );
};

export default CleanUp;
