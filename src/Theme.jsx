import { createContext, useState } from "react";
import App from "./App";

export const AppContext = createContext();
export default function Theme() {
  const [Mode, setmode] = useState("dark");
  return (
    <div>
      <AppContext.Provider value={{ Mode , setmode}}>
        <App />
      </AppContext.Provider>
    </div>
  );
}
