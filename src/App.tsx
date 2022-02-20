import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import { Publication } from "./pages/Publication";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <main id="margen">
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/publication/:index" element={<Publication />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
