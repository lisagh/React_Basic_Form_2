import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", message: "" });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(form.name + " says " + form.message);
  };

  return (
    <div className="App">
      <h1>Basic React Form</h1>
      <h4>submit an object</h4>
      <p>
        {" "}
        name: {form.name} message: {form.message}
      </p>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input
          label="hi"
          onChange={handleOnChange}
          name="name"
          value={form.name}
        />
        <br />
        <label>Message:</label>
        <br />
        <input onChange={handleOnChange} name="message" value={form.message} />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
