import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [preview, setPreview] = useState<File>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setPreview(event.target.files[0]);
  };

  return (
    <div>
      <div>
        <img
          style={{ width: "300px", objectFit: "cover", borderRadius: "4px" }}
          src={preview === undefined ? "" : URL.createObjectURL(preview)}
          alt=""
        />
      </div>
      <form>
        <input type="file" id="file" onChange={handleChange} />
        <label htmlFor="file">
          <span>upload image</span>
          <img src="https://img.icons8.com/parakeet/2x/add-image.png" alt="" />
        </label>
      </form>
    </div>
  );
}

export default App;
