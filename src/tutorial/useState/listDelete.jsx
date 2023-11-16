import { useState } from "react";

const ListElement = (props) => {
  const handleDeleteEvent = () => {
    const newList = list.filter((item) => {
      console.log(item, element);
      return item !== element;
    });

    list.splice(list.indexOf(element), 1);
    setList(newList);
  };
  const { element, list, setList } = props;
  return (
    <div style={{ padding: "1rem" }}>
      <div>{element}</div>
      <button onClick={handleDeleteEvent}>delete</button>
    </div>
  );
};

const items = ["Cricket", "Badminton", "Soccer"];
// list.splice()

const ListDelete = (props) => {
  var [list, setList] = useState(items);
  console.log(useState(list));
  const handleDeleteAllEvent = () => {
    setList([]);
  };
  const handleResetEvent = () => {
    console.log("props", props);
    console.log(list);
    setList(items);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        {list.map((ele) => {
          return (
            <ListElement
              element={ele}
              key={ele}
              list={list}
              setList={setList}
            />
          );
        })}
      </div>
      {list.length ? (
        <button onClick={handleDeleteAllEvent}>Delete All</button>
      ) : (
        <button onClick={handleResetEvent}>Reset</button>
      )}
    </div>
  );
};

export default ListDelete;
