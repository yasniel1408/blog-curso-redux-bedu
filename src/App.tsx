import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Tasks from "./components/Tasks";
import Users from "./components/Users";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <main id="margen">
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
