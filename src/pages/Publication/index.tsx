import { FC } from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import useGetUser from "./hooks/useGetUser";

export const Publication: FC = () => {
  const { index } = useParams();
  const { user, loading, error } = useGetUser({ index });

  return (
    <div>
      <h1>Publication by: {user?.name}</h1>
      <Error error={error} />
      <Loading loading={loading} />
    </div>
  );
};
