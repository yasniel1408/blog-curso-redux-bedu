import { FC } from "react";
import { IUser } from "../../types/IUser";

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
