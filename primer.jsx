import { Layout } from "antd";
import Button from "./Button";
import { useState } from "react";
const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 250px)",
  backgroundColor: "grey",
};

export default function ContentApp() {
  const [adder, setAdder] = useState([""]);
  const [sked, setSked] = useState(Array(adder.length).fill(0));
  const [name, setName] = useState(["needs"]);

  const modes = ["needs", "joy", "gas", "supply"];

  function handleClick(index) {
    const newName = [...name];
    newName[index] = modes[sked[index]];
    setName(newName);
    changeMode(index);
  }

  function changeMode(index) {
    setSked((prevSked) => {
      const updatedSked = [...prevSked];
      updatedSked[index] = (updatedSked[index] + 1) % 4;
      return updatedSked;
    });
  }

  function handleInputChange(index, event) {
    const updateAdd = [...adder];
    updateAdd[index] = event.target.value;
    setAdder(updateAdd);
  }

  function handleChangeSecond(index, event) {
    n;
    const updateSecond = [...adder];
    updateSecond[index] = event.target.value;
    setAdder(updateSecond);
  }
  function addList() {
    setAdder((prevAdd) => [...prevAdd, ""]); /// spisok
    setSked((prevSked) => [...prevSked, 0]);
    setName((prevName) => [...prevName, "needs"]);
  }

  return (
    <Layout.Content style={contentStyle}>
      <div>
        <pre className="titlefirst">Name</pre>
        <pre className="title">Type</pre>
        <pre className="title">Amount</pre>
        <pre className="title">Procent</pre>
      </div>

      <div className="info">
        <button className="add" onClick={addList}>
          Add
        </button>
        {adder.map((ad, index) => (
          <ul key={index}>
            <li value={ad}>
              <input
                type="text"
                className="control"
                value={ad}
                onChange={(e) => handleInputChange(index, e)}
              />
              <Button label={name[index]} onClick={handleClick(index)}>
                {name[index]}
              </Button>
              <input
                type="text"
                className="amount"
                onChange={(e) => handleChangeSecond(index, e)}
              />
              <pre className="procent">33%</pre>
            </li>
          </ul>
        ))}
      </div>
    </Layout.Content>
  );
}
