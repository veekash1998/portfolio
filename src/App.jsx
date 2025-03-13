import "./App.css";
import { RouterProvider } from "react-router-dom";
import { DataProvider } from "./context/DataProvider";
import router from "./router/Router";

function App() {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;
