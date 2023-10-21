import { useState } from "react";

const Toggle = () => {
  const [state, setState] = useState(false);

  const Alert = () => {
    return (
      <div style={{ backgroundColor: "#F28D8D", padding: "1rem" }}>
        Im an toggled Alert
      </div>
    );
  };

  const toggleAction = () => {
    console.log(state);
    if (state) setState(false);
    else setState(true);
  };
  return (
    <div>
      <button onClick={toggleAction}>Toggle</button>
      <h4>
        {state && (
          <div>
            <Alert />
          </div>
        )}
      </h4>
    </div>
  );
};

export default Toggle;
