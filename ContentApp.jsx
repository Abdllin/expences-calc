import { Layout, Typography, Statistic, Card, Col, Row } from "antd";

import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

import Button from "./Button";
import { useState } from "react";
const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 250px)",
  backgroundColor: "#353",
};

export default function ContentApp() {
  const [adder, setAdder] = useState([""]);
  const [sked, setSked] = useState(Array(adder.length).fill(0));
  const [name, setName] = useState(["needs"]);
  const [addersec, setAddersec] = useState([""]);
  const [result, setResult] = useState(0);

  const modes = ["needs", "joy", "gas", "supply"];
  const zarp = 45000;
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

  //Name
  function handleInputChange(index, event) {
    const updateAdd = [...adder];
    updateAdd[index] = event.target.value;
    setAdder(updateAdd);
  }

  //Amount
  function handleChangeSecond(index, event) {
    const updateSecond = [...addersec];
    updateSecond[index] = event.target.value;
    setAddersec(updateSecond);
    const updateSum = updateSecond.map(Number);
    const totalsum = updateSum.reduce((acc, current) => acc + current);
    setResult(totalsum);
  }

  function addList() {
    setAdder((prevAdd) => [...prevAdd, ""]); /// spisok
    setSked((prevSked) => [...prevSked, 0]);
    setName((prevName) => [...prevName, "needs"]);
    setAddersec((prevAddsec) => [...prevAddsec, ""]);
  }

  function removeList(index) {
    const newAddsec = [...addersec];
    const newAdd = [...adder];
    newAddsec.splice(index, 1);
    newAdd.splice(index, 1);
    setAdder(newAdd);
    setAddersec(newAddsec);
  }

  function procentCounter(index) {
    const zp = 45000;

    const result = (parseFloat(addersec[index]) * 100) / zp;

    if (isNaN(result) || result <= 0) {
      return " ";
    } else {
      return result.toFixed(2);
    }
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
        <div className="statistic">
          <Row gutter={16}>
            <Col>
              <Card bordered={false}>
                <Statistic
                  title="Served"
                  value={(result / zarp) * 100}
                  precision={2}
                  valueStyle={{
                    color: (result / zarp) * 100 <= 100 ? "#3f8600" : "#cf1322",
                  }}
                  prefix={
                    (result / zarp) * 100 <= 100 ? (
                      <ArrowUpOutlined />
                    ) : (
                      <ArrowDownOutlined />
                    )
                  }
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
          <pre className="totalAmount">totalAmount: {result}</pre>
        </div>
        <button className="add" onClick={addList}>
          Add
        </button>

        {adder.map((ad, index) => (
          <ul key={index}>
            <li value={ad}>
              <input
                label="Name"
                type="text"
                className="control"
                value={ad}
                onChange={(e) => handleInputChange(index, e)}
              />
              <Button label={name[index]} onClick={() => handleClick(index)}>
                {name[index]}
              </Button>
              <input
                label="Amount"
                type="text"
                className="amount"
                value={addersec[index]}
                onChange={(e) => handleChangeSecond(index, e)}
              />
              <Typography.Text
                className={`procent ${
                  procentCounter(index) >= 50 ? "red" : "green"
                }`}
              >
                {procentCounter(index)}%
              </Typography.Text>
              <button className="remove" onClick={() => removeList(index)}>
                Remove
              </button>
            </li>
          </ul>
        ))}
      </div>
    </Layout.Content>
  );
}
