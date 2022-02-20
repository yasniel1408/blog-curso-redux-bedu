import { FC } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../../../types/IUser";
import "./styles.css";

type AppProps = {
  users: [];
};

const Tabla: FC<AppProps> = ({ users }) => {
  const putRow = () =>
    users.map(({ id, name, email, website }: IUser) => (
      <tr key={id}>
        <td>{name}</td>
        <td>{email}</td>
        <td>{website}</td>
        <td>
          <Link to={`/publication/${id}`}>
            <div className="eye-solid icon"></div>
          </Link>
        </td>
      </tr>
    ));

  return (
    <>
      <h1>Users:</h1>
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{putRow()}</tbody>
      </table>
    </>
  );
};

export default Tabla;
