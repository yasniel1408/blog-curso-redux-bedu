import { FC } from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import useGetPosts from "./hooks/useGetPosts";
import useGetUser from "./hooks/useGetUser";

export const Publication: FC = () => {
  const { userId } = useParams();
  const { user, loading, error } = useGetUser({ userId });
  const {
    publications,
    loading: loadingPosts,
    error: errorPosts,
  } = useGetPosts({ userId });

  return (
    <div>
      <h1>Publication by: {user?.name}</h1>
      <Error error={error || errorPosts} />
      <Loading loading={loading || loadingPosts} />
      {JSON.stringify(publications)}
    </div>
  );
};
