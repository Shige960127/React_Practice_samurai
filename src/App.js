import React, { useState } from "react";
// import "./style.css"

const InputCheckBox = () => {
const [checkedValues, setCheckedValues] = useState([]);
const handleChange = (e) => {
  if (checkedValues.includes(e.target.value)) {
    setCheckedValues(
      checkedValues.filter((checkedValues) =>
        checkedValues !== e.target.value)
    )
  } else {
    setCheckedValues([...checkedValues, e.target.value]);
  }
};

return (
  <div className="App">
    <p>
      <b>{checkedValues.join("、")}</b>
    </p>
    <label>
      <input type="checkbox" value="マウス"
        onChange={handleChange}
        checked={checkedValues.includes("マウス")} />
    </label>
    <label>
      <input type="checkbox" value="モニター"
        onChange={handleChange}
        checked={checkedValues.includes("モニター")} />
    </label>
    <label>
      <input type="checkbox" value="キーボード"
        onChange={handleChange}
        checked={checkedValues.includes("キーボード")} />
    </label>
  </div>
);
};

export default function App() {
  return <inputCheckBox />
} 