import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layouts/Header";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between bg-gray items-center w-full pt-27px app-background">
      <Header />
      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
