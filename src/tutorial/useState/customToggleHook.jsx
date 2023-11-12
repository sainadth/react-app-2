import { useState } from "react";

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);
  const toggle = () => {
    setShow(!show);
  };
  return { show, toggle };
};

const ToggleExample = () => {
  const { show, toggle } = useToggle(true);
  return (
    <div>
      <h2>Toggle Custom Hook</h2>
      <button onClick={toggle}>Toggle</button>
      {show && <div>Some Stuff</div>}
    </div>
  );
};

export default ToggleExample;
