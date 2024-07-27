import { useState } from "react";
import Item from "./components/Item";
import List from "./components/List";
import Form from "./Form";

export default function App() {
  const [data, setData] = useState([
    { id: 1, content: "Hello, World!", name: "Alice" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 3, content: "Yay, interesting.", name: "Chris" },
  ]);

  const [showForm, setShowForm] = useState(false);

  const remove = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, { id: id, content: content, name: name }]);
  };

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h1>Yaycha</h1>
      <h1
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Foodie
        <button
          style={{
            width: 32,
            height: 32,
            borderRadius: 50,
            border: "0 none",
            background: showForm ? "#dc3545" : "#0d6efd",
            color: "white",
          }}

          onClick={()=>setShowForm(!showForm)}
          >
            {showForm ? "x" : "+"}
        </button>
      </h1>
      {showForm && <Form add={add} />}
      <List>
        {data.map((item) => (
          <Item key={item.id} item={item} remove={remove} />
        ))}
      </List>
    </div>
  );
}
