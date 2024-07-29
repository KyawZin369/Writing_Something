import { useContext, useState } from "react";
import Item from "./components/Item";
import List from "./components/List";
import Form from "./Form";
import { AppContext } from "./Theme";

export default function App() {
  const { Mode , setmode } = useContext(AppContext);

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

  const changeMode = () => (
    Mode !== 'dark' ? setmode('dark') : setmode('white')
  )

  return (
    <div
      style={{
        minHeight: 1500,
        background: Mode === "dark" ? "black" : "white",
        color: Mode === "dark" ? "white" : "black",
        paddingTop: 20,
      }}
    >
       <button onClick={changeMode}>{Mode === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
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
            onClick={() => setShowForm(!showForm)}
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
    </div>
  );
}
