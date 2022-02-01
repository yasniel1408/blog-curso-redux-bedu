import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav id="menu">
      <Link to="/">Usuarios</Link>
      <Link to="/tasks">Tareas</Link>
    </nav>
  );
}

export default Menu;
