import { useReducer, useState } from "react";

const ListElement = (props) => {
  const handleDeleteEvent = () => {
    dispatch({ element: element, type: "REMOVE_ELEMENT" });
  };
  const { element, list, dispatch } = props;
  return (
    <div style={{ padding: "1rem" }}>
      <div>{element}</div>
      <button onClick={handleDeleteEvent}>delete</button>
    </div>
  );
};

const items = ["Cricket", "Badminton", "Soccer"];
const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_ELEMENT = "REMOVE_ELEMENT";

const ReducerExample = () => {
  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === CLEAR_LIST) return { ...state, people: [] };
    if (action.type === RESET_LIST) return { ...state, people: items };
    if (action.type === REMOVE_ELEMENT)
      return {
        ...state,
        people: state.people.filter((item) => {
          return item != action.element;
        }),
      };
    throw new Error(`No matching dispatcher for action ${action.type}`);
  };

  const defaultState = {
    people: items,
  };

  /* useReducer(reducerFunction, defaultState) */

  const [state, dispatch] = useReducer(reducer, defaultState);
  // var [list, setList] = useState(items);
  // console.log(useState(list));
  const handleDeleteAllEvent = () => {
    dispatch({ type: CLEAR_LIST });
    // setList([]);
  };
  const handleResetEvent = () => {
    dispatch({ type: RESET_LIST });
    // console.log(list);
    // setList(items);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        {state.people.map((ele) => {
          return (
            <ListElement
              element={ele}
              key={ele}
              list={state.people}
              dispatch={dispatch}
            />
          );
        })}
      </div>
      {state.people.length ? (
        <button onClick={handleDeleteAllEvent}>Delete All</button>
      ) : (
        <button onClick={handleResetEvent}>Reset</button>
      )}
    </div>
  );
};

export default ReducerExample;
