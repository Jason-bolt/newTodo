import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray items-center w-full pt-27px app-background md:px-20">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
