import React, { useState } from "react";
import "./txtbox.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, FormControl } from "react-bootstrap";
function Txtbox() {
  const [pos, setPos] = useState(100);
  const [up, setUp] = useState(-400);
  const [siz, setSiz] = useState(50);
  const [value, setValue] = useState("Add text");
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: `${up}px`,
          right: `${pos}px`,
        }}
      >
        <div className="txt" style={{ fontSize: `${siz}px` }}>
          {value}
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "15px" }}
      >
        <FormControl
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button
          variant="dark"
          onClick={() => {
            setPos(pos + 20);
          }}
        >
          {`<`}
        </Button>
        <Button
          variant="dark"
          onClick={() => {
            setPos(pos - 20);
          }}
        >
          {`>`}
        </Button>
        <Button
          variant="dark"
          onClick={() => {
            setUp(up - 20);
          }}
        >
          {`^`}
        </Button>
        <Button
          variant="dark"
          onClick={() => {
            setUp(up + 20);
          }}
        >
          {"|"}
        </Button>
        <Button
          variant="dark"
          onClick={() => {
            setSiz(siz + 5);
          }}
        >
          +
        </Button>
        <Button
          variant="dark"
          onClick={() => {
            setSiz(siz - 5);
          }}
        >
          -
        </Button>
      </div>
    </div>
  );
}

export default Txtbox;
