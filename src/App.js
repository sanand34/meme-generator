import Txtbox from "./Txtbox";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./App.css";
function App() {
  const [img, setImg] = useState();
  const [num, setNum] = useState(1);
  const [array, setArray] = useState([]);

  useEffect(() => {
    async function url() {
      await fetch("https://api.imgflip.com/get_memes")
        .then((response) => response.json())
        .then((data) => {
          setImg(data);
          console.log(data);
        });
    }
    url();
  }, []);
  return (
    <div style={{ display: "grid", placeContent: "center", padding: "10px" }}>
      <img
        style={{ height: "700px" }}
        src={img?.data.memes[num].url}
        alt={"Hello"}
      ></img>

      <Button
        variant="dark"
        onClick={() => {
          setNum(num + 1);
          setArray([]);
        }}
      >
        Next Meme
      </Button>
      <Button
        variant="dark"
        onClick={() => {
          setArray([...array, array[array.length - 1] + 1]);
        }}
      >
        Add Text Box
      </Button>
      {array?.map((value) => (
        <Txtbox key={value} />
      ))}
    </div>
  );
}

export default App;
