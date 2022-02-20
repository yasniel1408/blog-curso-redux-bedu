import { FC } from "react";
import useGetUsers from "./hooks/useGetUsers";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Tabla from "./components/Tabla";
const Users: FC = () => {
  const { users, loading, error } = useGetUsers();
  return (
    <div className="margen">
      <Error error={error} />
      <Tabla users={users} />
      <>{loading && <Spinner />}</>
    </div>
  );
};

export default Users;
