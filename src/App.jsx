import "./App.css";
import { RouterProvider } from "react-router-dom";
import { DataProvider } from "./context/DataProvider";
import router from "./router/Router";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <DataProvider>
    <div className="flex h-screen gap-4 p-4 bg-gray-900">
      <div className="sidebar w-1/5 text-white overflow-auto">
        <Sidebar />
      </div>
      <div className="main-content flex flex-col w-4/5 bg-gray-800 text-white rounded-3xl p-4">
        <div className="content overflow-auto sidebar p-4">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
    </DataProvider>
  );
}

export default App;
